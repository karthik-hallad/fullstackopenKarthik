const express = require('express')
const PORT = 3001
const app = express()
const cors = require('cors')
var morgan = require('morgan')
const Person = require('./models/phonebook')

//MORGAN MIDDLEWARE LOGGER
morgan.token('type', function (req, res) { return (res.data) })
app.use(morgan(':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms :type'))

//serve react files..index.html
app.use(express.static('dist'))

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//cors support
app.use(cors())



app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id)
        .then((person) => {
            res.send(person)
        })
})


app.delete('/api/persons/:id', (req, res) => {
    Person.findByIdAndDelete(req.params.id)
        .then(() => {
            res.send(200).end()
        })
})

app.post('/api/persons/', (req, res) => {
    // console.log(req.body)
    if (req.body.name == undefined || req.body.number == undefined) {
        throw new Error("Missing fields name or number")
    }
    const { name, number } = req.body
    let person = new Person({
        "name": name,
        "number": number,
    })
    person.save().then(
        (p) => { return res.json(p) }
    )
})

app.get('/info', (req, res) => {
    const no = Person.find({}).then(
        (note) => {

            console.log(note)
            return res.send(`Phonebook has info for ${note.length} <br> The date is ${(new Date()).toString()}`)
        }
    )
})

app.get('/api/persons', (req, res) => {
    Person.find({})
        .then((data) => {
            res.send(data)
        })
})

const error = (err, req, res, next) => {
    res.send(err.message)
}
app.use(error)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})