const express = require("express");
const bcrypt = require("bcryptjs");
const {check, validationResult} = require("express-validator");
const User = require("../models/User");
const tokenService = require("../services/token.service");
const {generateUserData} = require("../utils/helpers");
const router = express.Router({mergeParams: true});

router.post("/signUp", [
    check("email", "Incorrect Email").isEmail(),
    check("password", "Password must contains min 8 symbols").isLength({min: 8}),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({
                    error: {
                        message: "INVALID_DATA",
                        code: 400,
                        errors: errors.array()
                    }
                });
            }

            const {email, password} = req.body;
            const exitingUser = await User.findOne({email});

            if (exitingUser) {
                return res.status(400).json({
                    error: {
                        message: "EMAIL_EXISTS",
                        code: 400
                    }
                });
            }

            const hashedPassword = await bcrypt.hash(password, 12);

            const newUser = await User.create({
                ...generateUserData(),
                ...req.body,
                password: hashedPassword
            });

            const tokens = tokenService.generate({_id: newUser._id});
            await tokenService.save(newUser._id, tokens.refreshToken);

            res.status(201).send({tokens: {...tokens, userId: newUser._id}, user: newUser});


        } catch (e) {
            res.status(500).json({
                message: "Server has error. Try later"
            });
        }
    }]);

router.post("/signInWithPassword", [
    check("email", "Incorrect Email").normalizeEmail().isEmail(),
    check("password", "Password cannot be empty").exists(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    error: {
                        message: "INVALID-DATA",
                        code: 400
                    }
                });
            }

            const {email, password} = req.body;
            const existingUser = await User.findOne({email});

            if (!existingUser) {
                return res.status(400).send({
                    error: {
                        message: "EMAIL_NOT_FOUND",
                        code: 400
                    }
                });
            }

            const isPasswordEqual = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordEqual) {
                return res.status(400).send({
                    error: {
                        message: "INVALID_PASSWORD",
                        code: 400
                    }
                });
            }

            const tokens = tokenService.generate({_id: existingUser._id});
            await tokenService.save(existingUser._id, tokens.refreshToken);

            return res.status(200).send({tokens: {...tokens, userId: existingUser._id}, user: existingUser});

        } catch (e) {
            res.status(500).json({
                message: "Server has error. Try later"
            });
        }
    },
]);

function isTokenInvalid(data, dbToken) {
    return !data || !dbToken || data._id !== dbToken?.user?.toString();
}

router.post("/signInWithToken", async (req, res) => {
    const {userId: _id, accessToken, refreshToken, expiresIn} = req.body;
    const isValidAccessToken = tokenService.validateAccess(accessToken);
    const isValidRefreshToken = tokenService.validateRefresh(refreshToken);
    console.log({userId: _id, accessToken, refreshToken, expiresIn});
    if (!isValidAccessToken && !isValidRefreshToken) {
        return res.status(400).send({
            error: {
                message: "TOKENS_IS_NOT_VALID",
                code: 400,
            },
        });
    }

    const existingUser = await User.findOne({_id});
    res.status(200).send({
        tokens: {userId: _id, accessToken, refreshToken, expiresIn},
        user: existingUser,
    });
});

router.post("/token", async (req, res) => {
    try {
        const {refresh_token: refreshToken} = req.body;
        const data = tokenService.validateRefresh(refreshToken);
        const dbToken = await tokenService.findToken(refreshToken);

        if (isTokenInvalid(data, dbToken)) {
            return res.status(401).json({message: "Unauthorized"});
        }

        const tokens = await tokenService.generate({_id: data._id});

        await tokenService.save(data._id, tokens.refreshToken);

        res.status(200).send({...tokens, userId: data._id});
    } catch (e) {
        res.status(500).json({
            message: "Server has error. Try later"
        });
    }
});

module.exports = router;