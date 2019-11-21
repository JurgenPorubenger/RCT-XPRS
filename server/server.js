const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/api/customers/:id', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];
    let c = customers.filter(obj => {
        return obj.id === Number(req.params.id);
    });
        // if(req.params.id in item) {res.json(item)});
    res.json(c);
});

app.listen(process.env.PORT || 8080, ()=>{console.log('Server running on port 8080')});