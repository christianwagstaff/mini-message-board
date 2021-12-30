var express = require("express");
var router = express.Router();
const messages = require("../messages");

/* GET new page. */
router.get("/", function (req, res, next) {
  res.render("new", { title: "Mini Message Board" });
});

// Post new message
router.post("/", (req, res, next) => {
  const message = req.body.text;
  const username = req.body.name;
  messages.push({ text: message, user: username, added: new Date() });
  res.redirect("/");
});

module.exports = router;
