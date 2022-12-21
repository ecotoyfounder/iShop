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
                darkColor: "#5D169D",
                light: "#FDEFFF",
                textColor: "#803CBD",
                bgDark: "#70F5F9",
                bgLight: "#F6FFFE",
                footerColor: "#8C85EF"
            },
            backgroundImage: {
                bgLightTheme: "url(/src/light theme background.svg)",
                bgDarkTheme: "url(/src/dark theme background.svg)",
            },
            margin: {
                marginLeftX: "440px",
                marginLeftX2: "480px",
                marginLeftX3: "500px",
                marginLeftX4: "520px",
                marginLeftXX: "540px",
                marginLeftXX2: "560px",
                marginLeftXX3: "580px",
                marginLeftXX4: "600px",
                marginLeftXXX: "640px",
                marginLeftXXX2: "6800px",
            },
            height: {
                heightC: "440px"
            },
            width: {
                textArea: "600px"
            }
        },
    },
    plugins: [
        plugin(function ({addComponents}) {
            addComponents({
                ".btn-primary": {
                    backgroundColor: "#7570F9",
                    color: "#F6FFFE",
                    borderRadius: "50px",
                    minWidth: "110px",
                    height: "37px",
                    fontSize: 18,
                    transitionDelay: ".07s",

                    "&:hover": {
                        backgroundColor: "#5D169D",
                        fontWeight: "bold",
                    }
                },
                ".btn-footer": {
                    backgroundColor: "#8C85EF",
                    color: "#F6FFFE",
                    borderRadius: "50px",
                    minWidth: "70px",
                    height: "37px",
                    fontSize: 18,
                    transitionDelay: ".07s",

                    "&:hover": {
                        backgroundColor: "#5D169D",
                        fontWeight: "bold",
                    }
                },
                ".btn-secondary": {
                    backgroundColor: "#F970F4",
                    color: "#F6FFFE",
                    borderRadius: "50px",
                    minWidth: "110px",
                    height: "37px",
                    fontSize: 18,
                    transitionDelay: ".07s",

                    "&:hover": {
                        backgroundColor: "#5D169D",
                        fontWeight: "bold",
                    }
                },
                ".btn-light": {
                    backgroundColor: "#FDEFFF",
                    color: "#803CBD",
                    borderRadius: "50px",
                    minWidth: "110px",
                    height: "37px",
                    fontSize: 18,
                    transitionDelay: ".07s",

                    "&:hover": {
                        backgroundColor: "#F970F4",
                        color: "#FDEFFF",
                        fontWeight: "bold",
                    }
                },
                ".btn-arrow-dark": {
                    backgroundColor: "#7570F9",
                    color: "#F6FFFE",
                    borderRadius: "5px",
                    width: "35px",
                    height: "35px",
                    fontSize: 16,
                    transitionDelay: ".07s",

                    "&:hover": {
                        backgroundColor: "#5D169D",
                        fontWeight: "bold",
                    }
                },
                ".btn-arrow-light": {
                    backgroundColor: "#F6FFFE",
                    color: "#803CBD",
                    borderRadius: "5px",
                    width: "25px",
                    height: "25px",
                    transitionDelay: ".07s",

                    "&:hover": {
                        backgroundColor: "#5D169D",
                        fontWeight: "bold",
                        color: "#F6FFFE",
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