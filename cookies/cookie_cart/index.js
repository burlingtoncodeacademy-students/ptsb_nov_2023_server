const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 5000;

const cookiesController = require("./controllers/cookie_controller");

app.use(cookieParser());

app.use("/", cookiesController);

app.listen(PORT, () => console.log(`Server is running on:${PORT}`));
