const fs = require('fs')
const path = require('path')

let data = 'console.log("Criando arquivo")'


//Criando a pasta /modules
/* fs.mkdir(path.join(__dirname, '/modules'),
    (error) => {
        if (error) {
            return console.log(`ERRO: ${error}`)
        } else {
            return console.log(`Pasta criada com sucesso`)
        }
    }
) */

//Criando o arquivo http.js
/* fs.writeFile(path.join(__dirname, 'http.js'),
    data,
    (err) => {
        if (err) {
            throw err
        }
        console.log(`Arquivo criado com sucesso!`)
    }
) */

//Criando o arquivo express.js
/* fs.writeFile(path.join(__dirname, 'express.js'),
    data,
    (err) => {
        if (err) {
            throw err
        }
        console.log(`Arquivo criado com sucesso`)
    }
) */

//Criar um arquivo OBs: Método assíncrono
/* fs.writeFile(path.join(__dirname, '/test', 'teste.html'), 'Hello World! ', (error) => {
    if (error) {
        return console.log(`ERRO: ${error}`)
    } else {
        console.log(`Arquivo criado com sucesso!`)
    }

    //Adiciona conteúdo no arquivo 
    fs.appendFile(path.join(__dirname, '/test', 'teste.html'), 'Hello Node', (error) => {
        if (error) {
            return console.log(`ERRO: ${error}`)
        } else {
            console.log(`Conteúdo adicionado com sucesso!`)
        }

    })
    //Abre um arquivo
    fs.readFile(
        path.join(__dirname, '/test', 'teste.html'),
        'utf8',
        (error, data) => {
            if (error) {
                return console.log(`ERRO: ${error}`)
            } else {
                console.log(data)
            }

        }
    )
}) */