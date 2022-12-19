const plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#7570F9",
                secondary: "#F970F4",
                light: "#FDEFFF",
                textColor: "#803CBD",
                bgDark: "#70F5F9",
                bgLight: "#F6FFFE",
            },
            backgroundImage: {
                bgLightTheme: "url(/src/light theme background.svg)",
                bgDarkTheme: "url(/src/dark theme background.svg)",
            }
        },
    },
    plugins: [
        plugin(function ({addComponents}) {
            addComponents({
                ".btn-primary": {
                    backgroundColor: "#7570F9",
                    color: "#F6FFFE",
                    display: "block",
                    borderRadius: "50px",
                    width: "110px",
                    height: "37px",
                    fontSize: 18,
                    transitionDelay: ".07s",

                    "&:hover": {
                        backgroundColor: "#70F5F9",
                        fontWeight: "bold",
                    }
                },
                ".btn-secondary": {
                    backgroundColor: "#F970F4",
                    color: "#F6FFFE",
                    display: "block",
                    borderRadius: "50px",
                    width: "110px",
                    height: "37px",
                    fontSize: 18,
                    transitionDelay: ".07s",

                    "&:hover": {
                        backgroundColor: "#70F5F9",
                        fontWeight: "bold",
                    }
                },
                ".btn-light": {
                    backgroundColor: "#FDEFFF",
                    color: "#803CBD",
                    display: "block",
                    borderRadius: "50px",
                    width: "110px",
                    height: "37px",
                    fontSize: 18,
                    transitionDelay: ".07s",

                    "&:hover": {
                        backgroundColor: "#F970F4",
                        color: "#FDEFFF",
                        fontWeight: "bold",
                    }
                },
                ".nav-img": {
                    width: "30px",
                    marginX: "10px"
                }
            });
        }),
    ],
};