const express = require("express");
const router = express.Router();
const ToDo = require("../models/todos.js"); 

// Index
router.get("/", (req, res) => {
  ToDo.find({}, (error, allToDos) => {
    res.render("Index", {
      toDos: allToDos,
    });
  });
});

// //Create
router.post("/", (req, res) => {
    ToDo.create(req.body, (error, createdToDo) => {
      if (error) {
        res.status(500).send({
          error: error.message,
        });
      } else {
        res.redirect("/");
      }
    });
  });

module.exports = router;
