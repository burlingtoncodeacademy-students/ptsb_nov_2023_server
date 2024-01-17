const router = require("express").Router();

router.post("/register", (req, res) => {
  try {
    // console.log(req.body);

    const { firstName, lastName, password } = req.body;

    res.status(200).json({
      fullName: `${firstName} ${lastName}`,
      password: password,
      date: req.datePosted,
    });
  } catch (err) {
    res
      .status(500)
      .send(`<img src="https://http.cat/500" alt="status code 500"/>`);
  }
});

module.exports = router;
