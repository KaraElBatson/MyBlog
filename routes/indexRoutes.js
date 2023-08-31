var express = require("express");
var router = express.Router();

const data = [
  {
    postTitle: "Aq shacosu biliyordum",
    postSubTitle:
    "FETÖ örgüt üyelerinin League of Legends üzerinden iletişim kurdukları tespit edildi.",
    image: "https://pbs.twimg.com/media/F4ABwsOX0AEuxKQ?format=jpg&name=large",
  },
  {
    postTitle: "Aq shacosu biliyordum",
    postSubTitle:
    "FETÖ örgüt üyelerinin League of Legends üzerinden iletişim kurdukları tespit edildi.",
    image: "https://pbs.twimg.com/media/F4ABwsOX0AEuxKQ?format=jpg&name=large",
  },
  {
    postTitle: "Aq shacosu biliyordum",
    postSubTitle:
    "FETÖ örgüt üyelerinin League of Legends üzerinden iletişim kurdukları tespit edildi.",
    image: "https://pbs.twimg.com/media/F4ABwsOX0AEuxKQ?format=jpg&name=large",
  },
];
//index.js den ulaşma
router.get("/", (req, res) => {
  res.render("home",{data : data});
});
router.get("/home", (req, res) => {
  res.render("home");
});
router.get("/post", (req, res) => {
  res.render("post");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/resume", (req, res) => {
  res.render("resume");
});
//router ile export etme
module.exports = router;
