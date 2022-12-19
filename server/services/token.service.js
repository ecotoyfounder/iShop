const jwt = require("jsonwebtoken");
const config = require("config");
const Token = require("../models/Token");

class TokenService {
    generate(payload) {
        const accessToken = jwt.sign(payload, config.get("accessSecretToken"), {
            expiresIn: "1h"
        });

        const refreshToken = jwt.sign(payload, config.get("refreshSecretToken"));

        return {
            accessToken,
            refreshToken,
            expiresIn: 3600
        };
    }

    async save(user, refreshToken) {
        const data = await Token.findOne({user});
        if (data) {
            data.refreshToken = refreshToken;
            return data.save();
        }

        return await Token.create({user, refreshToken});
    }

    validateAccess(accessToken) {
        try {
            return jwt.verify(accessToken, config.get("accessSecretToken"));
        } catch (e) {
            return null;
        }
    }

    validateRefresh(refreshToken) {
        try {
            return jwt.verify(refreshToken, config.get("refreshSecretToken"));
        } catch (e) {
            return null;
        }
    }

    async findToken(refreshToken) {
        try {
            return await Token.findOne({refreshToken});
        } catch (e) {
            return null;
        }
    }
}

module.exports = new TokenService();