import React from "react";
import PropTypes from "prop-types";

const UploadField = ({label, name, error}) => {


    return (
        <div className="my-3 relative mt-10">
            <label htmlFor={name} className="my-3 relative mt-10">{label}</label>
            <input
                type="file"
                id={name}
                name={name}
                className="text-darkColor border-none"
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

UploadField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default UploadField;
