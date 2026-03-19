const express = require('express');
const cors = require('cors')
const knex = require('knex')(require('../knexfile.js')["development"])
const app = express();
const port = 8081;

app.use(express.json())



app.get('/', (request, response) => {
    response.send("App is up big dog");
})

app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})

app.get('/cats', (req,response) => {
    knex('cats')
        .select('*')
        .then(cats => {
            response.json(cats);
        })
})

app.get('/breeds', (req,response) => {
    knex('breeds')
        .select('*')
        .then(cats => {
            response.json(cats);
        })
})

app.get('/famous-cats', (req,response) => {
    knex('famous_cats')
        .select('*')
        .then(cats => {
            response.json(cats);
        })
})