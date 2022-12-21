import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";
import Card from "../components/Card";
import TextField from "../components/TextField";
import Button from "../components/Button";
import {Navigate, NavLink, useLocation} from "react-router-dom";
import {getIsLoggedIn, logIn} from "../store/authSlice";

const signUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .min(8, "Password must contain at least 8 symbols")
        .required("Required"),
});

const LogInPage = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();

    const location = useLocation();
    const fromPage = location.state?.from?.pathname || "/";

    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
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
        dispatch(logIn(data));
    };

    return (!isLoggedIn ?
        <div
            className="mt-20 m-auto p-10 justify-center text-primary max-w-lg rounded-3xl bg-bgDark bg-opacity-20 shadow-bgDark shadow-md">
            <Card.Title>Log In</Card.Title>

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <Button disabled={!isValid}>Log In</Button>

            </form>
            <NavLink className="text-center m-auto underline" to="/signup">
                Create an account
            </NavLink>
        </div>
        : <Navigate to={fromPage}/>);
};

export default LogInPage;

