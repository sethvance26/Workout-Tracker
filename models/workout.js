const mongoose = require('mongoose');

const Schema = mongoose.Schema;



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

        },
        sets: {

        },
        reps: {

        },
        duration: {
            type: Number,
            required: ""
        },
        distance: {
            type: Number,
        },
    }]
});

const workoutSchema = mongoose.model("Transaction", transactionSchema);

module.exports = Workout;