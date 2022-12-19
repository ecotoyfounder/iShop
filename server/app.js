const express = require("express");
const chalk = require("chalk");
const config = require("config");
const cors = require("cors");
const mongoose = require("mongoose/lib");
const routes = require("./routes");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use("/api", routes);

const PORT = config.get("port") ?? 8080;

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.join(__dirname, "client")));

    const indexPAth = path.join(__dirname, "client", "index.html");

    app.get("*", (req, res) => {
        res.sendFile(indexPAth);
    });
}


async function start() {
    try {
        // mongoose.connection.once("open", () => {
        //     initDatabase();
        // });
        await mongoose.connect(config.get("mongoUri"));
        app.listen(PORT, () => console.log(chalk.green(`Server has been started on port ${PORT}...`)));
    } catch (e) {
        console.log(chalk.red(e.message));
        process.exit(1);
    }
}

start();