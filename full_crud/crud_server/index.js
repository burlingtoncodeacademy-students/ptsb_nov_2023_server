const express = require("express");
const cors = require("cors");

const app = express();

const crudController = require("./controllers/crud-controller");

const PORT = 9000;

// Required to parse through JSON data that the server receives
app.use(express.json());

//? Challenge:
/*
    - Use the controller - providing valid path

*/
app.use(cors());
app.use("/crud", crudController);

app.listen(PORT, () => {
  console.log(`The server is spinning up at port: ${PORT}`);
});
