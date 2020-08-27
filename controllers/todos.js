const express = require("express");
const router = express.Router();
const ToDo = require("../models/todos.js"); // export router

// Index
router.get("/", (req, res) => {
  ToDo.find({}, (error, allToDos) => {
    res.render("Index", {
      toDos: allToDos,
    });
  });
});


//New



// //Destroy

// router.delete("/:id", (req, res) => {
//   Workout.findByIdAndDelete(req.params.id, (error, deletedWorkout) => {
//     if (error)
//       res.status(500).send({
//         error: error.message,
//       });
//     else {
//       console.log(deletedWorkout);
//       res.redirect("/workouts");
//     }
//   });
// });

// // Update - add comment to workout:
// router.put("/:id/comment", (req, res) => {
//   const comment = { username: req.body.username, comment: req.body.comment };
//   console.log(comment);
//   Workout.findById(req.params.id, (error, foundWorkout) => {
//     console.log(foundWorkout);
//     foundWorkout.comments.push(comment);
//     console.log(foundWorkout);
//     foundWorkout.save((err, savedWorkout) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(savedWorkout);
//       }
//       res.redirect(`/workouts/${req.params.id}`);
//     });
//   });
// });

// //Update

// router.put("/:id", (req, res) => {
//   Workout.findByIdAndUpdate(req.params.id, req.body, (err, udpatedWorkout) => {
//     res.redirect("/workouts");
//   });
// });

// //Create
router.post("/", (req, res) => {
    // if (req.body.done === "") {
    //     req.body.done = true;
    //   } else {
    //     req.body.done = false;
    //   }
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

// //Edit
// router.get("/:id/edit", (req, res) => {
//   Workout.findById(req.params.id, (error, editWorkout) => {
//     if (error) {
//       res.status(500).send({
//         error: error.message,
//       });
//     } else {
//       res.render("workouts/Edit", {
//         workout: editWorkout,
//       });
//     }
//   });
// });

// router.get("/:id/comment", (req, res) => {
//   Workout.findById(req.params.id, (error, editComments) => {
//     if (error) {
//       res.status(500).send({
//         error: error.message,
//       });
//     } else {
//       Member.find({}, (err, users) => {
//         if (err) {
//           console.log(err);
//         } else {
//           // console.log("-----------------success--------------------");
//           console.log(users);
//         }

//         res.render("workouts/Comments", {
//           workout: editComments,
//           users: users,
//         });
//       });
//     }
//   });
// });

// //Show

// router.get("/:id", (req, res) => {
//   Workout.findById(req.params.id, (error, foundWorkout, allComments) => {
//     res.render("workouts/Show", {
//       workout: foundWorkout,
//     });
//   });
// });

module.exports = router;
