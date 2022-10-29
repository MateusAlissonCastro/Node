const http = require('http')
const url = require('url')
const port = 8080

let msg = '<h1>Hello, mateus</h1>'

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(msg)
    }
    if (req.url === "/users") {
        const users = [
            {
                name: 'mateus',
                idade: '23',
            }
        ]
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(users))

    }
})

server.listen(port, () => console.log(`Rodando na porta ${port}`))  