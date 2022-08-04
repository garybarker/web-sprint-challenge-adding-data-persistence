// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');


const router = express.Router();

router.get('/', (req, res) => {
  Task.find()
    .then(result => {
      result.forEach(i => {
        i.task_completed ? i.task_completed = true : i.task_completed = false
      })
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'internal server error' });
    }) 
});

router.post('/', (req, res) => {
  Task.insert(req.body)
    .then(result => {
      result.task_completed ? result.task_completed = true : result.task_completed=false
      res.status(201).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'internal server error' });
    })
});

module.exports = router;