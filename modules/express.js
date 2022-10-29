const express = require('express')
const UserModel = require('../src/models/user.model')
const app = express()
const userModel = require('../src/models/user.model')
app.use(express.json()) //Diz para o express que vai receber json

app.set('view engine', 'ejs')
app.set('views', 'src/views')
//Middleware
/* app.use((req, res, next) => {
    console.log('Request Type : ', req.method)
    next()
}) */

//Renderizando html
app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({})
    //const msg = "Welcome Mateus, you're beautiful!"
    res.render('index', { users })
})
//Busca usuários
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.status(200).json(users)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

//Buscar um usuário pelo ID
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findById(id)
        return res.status(200).json(user)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

//Cria um usuário
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

//Atualizar usuário
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

//Deletar usuário
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        //const user = await UserModel.findByIdAndDelete(id)
        const user = await UserModel.findByIdAndRemove(id)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
})
const port = 8080

app.listen(port, () => console.log('Servidor rodando na porta:', port))