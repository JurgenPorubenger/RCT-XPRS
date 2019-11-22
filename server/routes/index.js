const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/ping', (req, res) => res.send('pong'));

router.get('/:id', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];
  const c = customers.filter((obj) => obj.id === Number(req.params.id));
  // if(req.params.id in item) {res.json(item)});
  res.json(c);
});

module.exports = router;
