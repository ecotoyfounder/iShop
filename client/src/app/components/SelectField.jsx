import React from "react";
import PropTypes from "prop-types";

const SelectField = ({label, name, value, options, onChange}) => {
    const handleChange = (e) => {
        const {children} = e.target;
        const {target} = e;
        let title = "";

        for (const item of children) {

            if (item.value === target.value) {
                title = item.text;
            }
        }

        onChange({name: target.name, value: target.value, title});
    };
    const getInputClasses = () => {
        return "w-full py-2 mt-2 rounded text-sm dark:bg-gray-700 h-12 focus:outline-none ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg";
    };
    return (
        <div className="mt-10 my-3 form-outline form-white relative">
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className={getInputClasses()}
            >
                <option value="">Select category...</option>
                {options.map((option) => (
                    <option value={option._id} key={option._id}>
                        {option.name}
                    </option>
                ))}
            </select>

        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

};

export default SelectField;
