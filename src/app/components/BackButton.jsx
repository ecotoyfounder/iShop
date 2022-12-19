import React from "react";
import {useNavigate} from "react-router-dom";


const BackButton = () => {
    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <button onClick={handleGoBack} className="btn-arrow-dark px-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-7.5 h-7.5">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
        </button>
    );
};

export default BackButton;
