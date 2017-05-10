var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
	burger.insertOne(["burger_name"], [req.body.burger_name], function(){
	  res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
  var condition = parseInt(req.params.id);

  burger.updateOne(["devoured"], condition, function() {
    res.redirect("/");
    console.log("updated");
  });
});




module.exports = router;