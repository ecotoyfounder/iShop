import React from "react";

const SpinLoading = () => {
    2;

    return (
        <div className="flex justify-center m-auto ">
            <h1 className="text-lg text-primary font-semibold animate-pulse">Loading...</h1>
            <svg
                className="mt-1.5 animate-spin ml-4 h-5 w-5 text-primary rounded-full"
                viewBox="0 0 26 26"
            >
                <circle
                    className="opacity-0"
                    cx="24"
                    cy="24"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="6"
                />
                <path
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        </div>
    );
};

export default SpinLoading;
