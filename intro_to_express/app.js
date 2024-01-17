const express = require("express");
const app = express();
const PORT = 8080;

const { logTime } = require("./utils/index.js");

const practiceController = require("./controllers/practicecontroller");
const routeController = require("./controllers/routecontroller");
const authController = require("./controllers/authcontroller");

app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logTime);
app.use("/practice", practiceController);
app.use("/routes", routeController);
app.use("/user", authController);

app.listen(PORT, () => {
  console.log(`The server is spinning up at port ${PORT}`);
});
