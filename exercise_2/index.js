const PORT = 3001
const express = require("express")
const app = express()

const cities = [
    { cityName: 'Tampa', continent: 'North America' },
    { cityName: 'Paris', continent: 'Europe' },
    { cityName: 'Sydney', continent: 'Australia' },
    { cityName: 'Lagos', continent: 'Africa' },
    { cityName: 'Lima', continent: 'South America' },
    { cityName: 'Tampa', continent: 'North America' },
    { cityName: 'Hong Kong', continent: 'Asia' },
    { cityName: 'Houston', continent: 'North America' },
    { cityName: 'Atlanta', continent: 'North America' },
    { cityName: 'London', continent: 'Europe' },
]

const myInfo = {
    name: "Kayla",
    city: "Tampa",
    state: "Florida",
}


const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html')
// Write your routes between the ***
app.get('/', (req, res) => {
    res.send("Node and express are just lovely!")
})
// ***
app.get('/cities', (req, res) => {
    res.render('city', {
        locals: {
            cities,
        }
    })
})
// ***
app.post('/error', (req, res) => {
    res.statusCode = 400;
    res.send("This is an invalid route");
})
// ***
app.get('/Kayla', (req, res) => {
    res.send(`My name is ${myInfo.name}. I live in ${myInfo.city}, ${myInfo.state}.`)
        })

// ***
const myMovies = [
    { movieName: "Suicide Squad", poster: "https://images.unsplash.com/photo-1511875762315-c773eb98eec0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" },
    { movieName: "Star Wars", poster: "https://images.unsplash.com/photo-1478479474071-8a3014d422c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { movieName: "Gaurdians of the Galaxy", poster: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { movieName: "Spiderman", poster: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFydmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
]
app.post('/movies', (req, res) => {
    res.render('movies', {
        locals: {
            movies,
        }
    })
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))