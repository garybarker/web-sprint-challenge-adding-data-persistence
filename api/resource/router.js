// build your `/api/resources` router here
const db = require('../../data/dbConfig');

const express = require('express');
const router = express.Router();

const Resource = require('./model');



router.get('/', (req, res) => {
  Resource.find()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'internal server error' });
    })
});

router.post('/', (req, res) => {
  Resource.insert(req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'internal server error' });
    })
});

module.exports = router;