const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get("/", (req, res, next) => {
  Task.find()
  .then((tasks) => {
    res.json(tasks)
    return res.status(200).send();
  })
  .catch(next);
 
 
})




module.exports = router;