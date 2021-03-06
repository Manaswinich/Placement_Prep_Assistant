const express = require('express');
const router = express.Router();
const Task = require('../modules/Schema');

// get a list of tasks from the db
// Returns the task object
router.get("/", function (req, res) {
    res.send({ "error": "not assigned to any func" })
})

router.get("/tasks/:id", function (req, res, next) {
    Task.findOne({ _id: req.params.id }).then(function (task) {
        res.send(task);
    })
        .catch(function (next) {
            Task.find({ user: req.params.id }).then(function (task) {
                res.send(task);
            })
                .catch(function (next) {
                    res.send("please try again");
                })

        })
});

// add a new task to the db
router.post("/tasks", function (req, res, next) {
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

//update the user details on db
router.put("/tasks/:id", function (req, res, next) {
    Task.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Task.findOne({ _id: req.params.id }).then(function (task) {
            res.send(task);
        });
    }).catch(next);
});

// delete a task from the db
router.delete("/tasks/:id", function (req, res, next) {
    Task.findByIdAndRemove({ _id: req.params.id }).then(function (task) {
        res.send(task);
    });
});

module.exports = router;