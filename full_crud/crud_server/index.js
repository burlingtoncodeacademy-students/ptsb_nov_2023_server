const express = require("express");
const app = express();

const crudController = require("./controllers/crud-controller");
const PORT = 8080;

//? Challenge:
/*
    - Use the controller - providing valid path

*/

app.listen(PORT, () => {
  console.log(`The server is spinning up at port: ${PORT}`);
});
