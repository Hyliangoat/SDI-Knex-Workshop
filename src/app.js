const express = require('express');
const cors = require('cors')
const knex = require('knex')(require('../knexfile.js')["development"])
const app = express();
const port = 8081;

app.use(express.json())



app.get('/', (request, response) => {
    response.send("App is up big dog");
})


app.get('/cats', (req,response) => {
    knex('cats')
        .select('*')
        .then(cats => {
            response.json(cats);
        })
})

app.get(`/cats/:catId`, async (req,res) => {
    let {catId} = req.params;
    console.log(catId)
    let tempCats = await knex('cats').select('*')
    let myCatId = tempCats.find(element => {
        return element.id === parseInt(catId)
    })

    console.log(myCatId)
    res.status(201).send(myCatId)
})

app.get('/breeds', (req,response) => {
    knex('breeds')
        .select('*')
        .then(cats => {
            response.json(cats);
        })
})

app.get(`/breeds/:breedId`, async (req,res) => {
    let {breedId} = req.params;
    console.log(breedId)
    let tempBreeds = await knex('breeds').select('*')
    let myBreedId = tempBreeds.find(element => {
        return element.id === parseInt(breedId)
    })

    console.log(myBreedId)
    res.status(201).send(myBreedId)
})

app.get('/famous-cats', (req,response) => {
    knex('famous_cats')
        .select('*')
        .then(cats => {
            response.json(cats);
        })
})

app.get(`/famous-cats/:famCatId`, async (req,res) => {
    let {famCatId} = req.params;
    console.log(famCatId)
    let tempCats = await knex('famous_cats').select('*')
    let myCatId = tempCats.find(element => {
        return element.id === parseInt(famCatId)
    })

    console.log(myCatId)
    res.status(201).send(myCatId)
})

app.post('/cats', async (req, res) => {
    let { name, color, breed} = req.body
    let breed_id = '';
    breed === 'Bombay' ? breed_id = '2' : breed_id = '1';
    const [id] = await knex('cats').insert({
        name, 
        color,
        breed_id
    }).returning('*');

    res.status(201).send('Nice');
})

app.listen(port, () => {
    console.log(`Running on port: ${port}`)
})