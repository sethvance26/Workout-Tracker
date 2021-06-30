const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Here we are specifying what values a new workout can have / or are required to have. 
//We can get all this information from viewing what we had on the front end previously. 
const workoutSchema = new Schema ({
    day: {
        type: Date, 
        default: () => new Date()
    },
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
        reps: {
            type: Number
        },
        sets: {
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

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;