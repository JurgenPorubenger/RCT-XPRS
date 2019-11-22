const express = require('express');

const router = express.Router();


router.post('/', async (req, res) => {
  console.log(`${req.body}YYYY`)
  res.send(JSON.stringify(req.user));
  // res.json(JSON.stringify(req.body));
});

module.exports = router;
