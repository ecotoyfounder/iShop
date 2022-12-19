import React from "react";
import PropTypes from "prop-types";

const SelectField = ({label, name, value, options, defaultOption, onChange}) => {

    const handleChange = ({target}) => {
        onChange({name: target.name, value: target.value});
    };
    const getInputClasses = () => {
        return "w-full pl-2 py-2 mt-2 rounded text-sm dark:bg-gray-700 h-12 focus:outline-none ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg pr-2 ";
    };

    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                name: options[optionName].name,
                value: options[optionName]._id
            }))
            : options;

    return (
        <div className="mt-10 my-3 form-outline form-white relative">
            <label htmlFor={name}>{label}</label>
            <select
                placeholder={defaultOption}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className={getInputClasses()}
            >
                {optionsArray &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>

        </div>
    );
};

SelectField.defaultProps = {
    type: "text"
};

SelectField.propTypes = {
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

};

export default SelectField;
