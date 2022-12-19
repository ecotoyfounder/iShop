import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {signUp} from "../store/users";
import Card from "../components/Card";
import TextField from "../components/TextField";
import Button from "../components/Button";
import {NavLink} from "react-router-dom";

const signUpSchema = Yup.object({
    username: Yup.string()
        .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .min(8, "Password must contain at least 8 symbols")
        .required("Required"),
});

const SignUpPage = () => {

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (target) => {
        console.log("---target", target);
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validate = () => {
        const errors = signUpSchema;
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        const newData = {
            ...data
        };
        dispatch(signUp(newData));
    };

    return (
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
            <NavLink className="text-center m-auto underline" to="/auth/login">
                Log In
            </NavLink>
        </div>
    );
};

export default SignUpPage;
