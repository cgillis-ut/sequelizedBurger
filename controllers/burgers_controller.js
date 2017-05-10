var express = require("express");
var router = express.Router();
var db = require("../models")
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data){
    //dynamic data for handlebars
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
	db.Burger.create({
    burger_name: req.body.burger_name,
  }).then(function(data){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
 // var condition = parseInt(req.params.id);
  var condition = {
    devoured: true
 };

  db.Burger.update(condition, {
    where: {
      id: parseInt(req.params.id)
    }
  }).then(function(data){
    res.redirect("/");
  });
});

module.exports = router;
