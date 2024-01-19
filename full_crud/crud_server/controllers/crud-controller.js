const router = require("express").Router();
const db = require("../mockdb/db.json");
//
//? Challenge:
/*
    - 2 GET requests
        - One to retrieve all of the data from the given mock dataset
        - One to retrieve a specific piece of data (obj) from the dataset by its id

        - Implement try/catch
        - Provide correct HTTP status code

*/
// GET ALL
router.get("/all", (req, res) => {
  try {
    res.status(200).json({
      Results: db,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Error: err,
    });
  }
});
// GET By ID
router.get("/one/:id", (req, res) => {
  try {
    let filtered = db.filter((i) => i.id == req.params.id);
    res.status(200).json({
      Results: filtered,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Error: err,
    });
  }
});
// POST Create item
router.post("/create", (req, res) => {
  try {
    let myObj = {
      id: db.length + 1,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      emoji: req.body.emoji,
    };

    db.push(myObj);

    res.status(200).json({
      Added: myObj,
      Results: db,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Error: err,
    });
  }
});

module.exports = router;
