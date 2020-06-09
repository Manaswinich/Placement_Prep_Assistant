const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema for tasks
const taskSchema = new Schema({
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
// Schema for skills
const skillSchema = new Schema({
    skill: {
        type: String,
        required: [true, "skill is required."],
    },
    sub_task: [taskSchema],
});

// skills is the collection name
const skills = mongoose.model("task", skillSchema);

module.exports = skills;