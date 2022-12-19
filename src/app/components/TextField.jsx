import React, {useState} from "react";
import PropTypes from "prop-types";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";


const TextField = ({label, type, name, value, onChange, error}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({target}) => {
        onChange({name: target.name, value: target.value});
    };
    const getInputClasses = () => {
        return "w-full pl-2 py-2 rounded text-sm dark:bg-gray-700 h-12 focus:outline-none ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 pr-2 " + (error ? " is-invalid" : "");
    };
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="my-3 form-outline form-white relative">
            <label htmlFor={name}>{label}</label>
            <input
                placeholder={label}
                type={showPassword ? "text" : type}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className={getInputClasses()}
            />
            {type === "password" && (
                <button
                    className="pt-3 right-2.5 btn-outline-secondary xs:inline-block absolute"
                    type="button"
                    onClick={toggleShowPassword}
                >
                    {showPassword ? (
                        <EyeIcon className="relative w-6 h-6"/>
                    ) : (
                        <EyeSlashIcon className="relative w-6 h-6"/>
                    )}
                </button>
            )}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
