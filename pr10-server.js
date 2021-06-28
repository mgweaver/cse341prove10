const express = require('express');
const router = express.Router();

//path to data
const data = require('./data')

router.get('/fetchAll', (req, res, next) => {
    res.json(data)
})

router.post('/insertName', (req, res, next) => {
  if (req.body.newName !== undefined) {
    const newName = req.body.newName

    if (!data.avengers.some(a => a.name === newName)) {
      data.avengers.push({ name: newName })
      res.sendStatus(200)
    }
  } else {
    res.sendStatus(400)
  }
})

router.get('/', (req, res, next) => {
  res.render('./pr10', {
    title: 'Prove 10', 
    path: 'pr10'
  })
})

module.exports = router