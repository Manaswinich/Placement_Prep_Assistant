const express = require('express');
const router = express.Router();
const Task = require('../modules/Schema');

// get a list of tasks from the db
// Returns the task object
router.get("/tasks/:id", function (req, res, next) {
    console.log("GET");
    Task.findById(req.params.id).then(function (task) {
        res.send(task);
    });
});

// add a new task to the db
router.post("/tasks", function (req, res, next) {
    console.log(req.body);
    // Creates a promise and waits till this execution
    // is completed before it fires subsequent code
    Task.create(req.body)
        .then(function (task) {
            res.send({
                status: res.statusCode,
                message: "Task Successfully Added in the DB.",
                id: task._id,
            });
        })
        .catch(next);
});

// delete a task from the db
router.delete("/tasks/:id", function (req, res, next) {
    Task.findByIdAndRemove({ _id: req.params.id }).then(function (task) {
        res.send(task);
    });
});


module.exports = router;