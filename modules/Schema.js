const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema for tasks
const skillSchema = new Schema({
    number: {
        type: String,
        required: [true, "Number is required"],
    },
    task_desc: {
        type: String,
        required: [true, "Task is required"],
    },
    start_date: {
        type: String,
        required: [true, "Start date is required"],
    },
    end_date: {
        type: String,
        required: [true, "End date is required"],
    },
    status: {
        type: String,
        required: [true, "status is required"],
    }
});

// const taskSchema = new Schema({
//     skillName: String,
//     details: [skillSchema]

// });

// Schema for skills
const main_Schema = new Schema({
    user: {
        type: String,
        required: [true, "email is required."]
    },
    goal: {
        type: String,
        required: [true, "Dream role is required."]
    },
    goal_desc: {
        type: String,
        required: [true, "Goal description is required."]
    },
    tasks: [{
        skillName: String,
        details: [skillSchema]
    }],
});

// skills is the collection name
const skills = mongoose.model("task", main_Schema);

module.exports = skills;