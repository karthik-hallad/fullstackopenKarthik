const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = "mongodb+srv://fullstack:fullstack@cluster0.v5rfurg.mongodb.net/?retryWrites=true&w=majority"





mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })


const PersonSchema = new mongoose.Schema({
    "id": Number,
    "name": String,
    "number": String
})

PersonSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
const Person = mongoose.model('Person', PersonSchema)
module.exports = Person