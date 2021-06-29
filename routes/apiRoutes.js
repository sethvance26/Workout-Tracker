const router = require("express").Router();

const Workout = require("../models/workout.js");

//Post route for creating a new workout

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Put route for updating workout by id

router.put("/api/workouts/:id", ({ body , params }, res) => {
  Workout.findbyIdAndUpdate(
    params.id,
    {$push: {exercises: body}},
    {new: true, runValidators: true}
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
