const express = require('express');

const router = express.Router();

/* GET home page. */

router.get('/customers', (req, res) => {
  // console.log(req.params.id+'LOLOLOLO');
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];
  console.log(customers);
  // const c = customers.filter((obj) => obj.id === Number(req.params.id));
  // if(req.params.id in item) {res.json(item)});
  res.json(customers);
});

router.post('/registrate', (req, res) => {
  const{firstName, email, password}=req.body;
  const user = new UserModel({
    firstName: firstName,
    email: email,
  });
  user.password = await user.setPassword(password);

  const ajv = new Ajv();
  const validate = ajv.compile(registerValidation);
  const valid = validate(req.body);
  const { errors } = validate;

  if(!valid) return  res.status(400).send(errors);

  const emailExist = await UserModel.findOne({email});
  if(emailExist) return res.status(400).send('Email already exist');

  try {
    const savedUser = await user.save();
    await res.send(savedUser);
  }catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
