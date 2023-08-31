var express = require("express");
var router = express.Router();


router.get("/signin", (req, res) => {
  res.render("admin/signin");
});
//router ile export etme
module.exports = router;
