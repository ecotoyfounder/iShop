import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import Card from "../components/Card";
import TextField from "../components/TextField";
import Button from "../components/Button";
import {Navigate, NavLink, useLocation} from "react-router-dom";
import {getAuthUser, signUp} from "../store/authSlice";

const signUpSchema = Yup.object().shape({
    name: Yup.string()
        .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .min(8, "Password must contain at least 8 symbols")
        .required("Required"),
});

const SignUpPage = () => {

    const dispatch = useDispatch();
    const authUser = useSelector(getAuthUser());

    const location = useLocation();
    const fromPage = location.state?.from?.pathname || "/";

    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        signUpSchema
            .validate(data)
            .then(() => {
                setErrors({});
            })
            .catch((err) => setErrors({[err.path]: err.message}));
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValid) return;
        dispatch(signUp(data));
    };


    return (!authUser ?
            <div
                className="mt-20 m-auto p-10 justify-center text-primary max-w-lg rounded-3xl bg-bgDark bg-opacity-20 shadow-bgDark shadow-md">
                <Card.Title>Sign Up</Card.Title>

                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        name="name"
                        onChange={handleChange}
                        error={errors.name}
                        value={data.name}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        onChange={handleChange}
                        error={errors.email}
                        value={data.email}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={data.password}
                        onChange={handleChange}
                        error={errors.password}
                    />
                    <Button disabled={!isValid}>Sign Up</Button>
                </form>
                <NavLink className="text-center m-auto underline" to="/login">
                    Log In
                </NavLink>
            </div> : <Navigate to={fromPage}/>
    );
};

export default SignUpPage;
