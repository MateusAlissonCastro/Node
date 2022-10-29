const mongoose = require('mongoose')

const connectToDataBase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@aprendendonode.donpbvw.mongodb.net/?retryWrites=true&w=majority`,
        (err) => {
            if (err) {
                throw err
            }
            return console.log('Banco de dados conectado com sucesso!')
        }
    )
}

module.exports = connectToDataBase