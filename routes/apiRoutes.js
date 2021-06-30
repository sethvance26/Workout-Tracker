const router = require("express").Router();

const Workout = require("../models/workout.js");

//Post route below for creating a new workout

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Put route below for updating workout by id

router.put("/api/workouts/:id", ({ body , params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    {$push: {exercises: body}},
    {new: true, runValidators: true}
  )
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Get route to retrieve workouts, and adding sum of all workouts.
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    { $addFields: {totalDuration: { $sum: '$exercises.duration'} } }
  ])
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


//Get route to retrieve workouts, and add total duration of a workout
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    { $addFields: {totalDuration: { $sum: '$exercises.duration'} } }
  ])
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


//Delete route below to remove a workout from our list

router.delete("/api/workouts/delete", ({ body }, res) => {
  Workout.findbyIdAndRemove(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
