//const {Person} = require("./person")
//const person = new Person("Alisson")
//console.log(person.sayMyName())
//require("./path"
//require("./modules/fs")
//require("./modules/http")


const dotenv = require('dotenv')
const connectToDataBase = require('./src/database/connect')
dotenv.config()
connectToDataBase()
require('./modules/express')