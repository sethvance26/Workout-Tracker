const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Here we are specifying what values a new workout can have / are required to have. 

const workoutSchema = new Schema ({
    exercises: [{
        
        name: {
            type: String,
            required: ""
        },

        type: {
            type: String,
            required: ""
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number,
            required: ""
        },
        distance: {
            type: Number
        },
    }]
});

const workoutSchema = mongoose.model("Workout", workoutSchema);

module.exports = Workout;