const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    exercises: [{
        name: {
            type: String,
            required: ""
        }
    }]
})