const http = require('http') // http e tudo relacionado sao tipo biblitecas esse require
const fs = require('fs') // arquivos
const path = require('path') // boa pratica de encontro do melhor caminho possivel pro arquivo

http.createServer((req, res) => {
    

    const file = req.url === '/' ? 'index.html' : req.url
    console.log(file)














    if(req.url === '/')
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'), // localhost:5000/file
            (err, content) => { // err eh erro n sei pq precisa colocar e content eh o conteudo 
                if(err) throw err
                
                res.end(content)
            }
        )

    if(req.url === '/contato')
        return res.end('<h1>Contato</h1>')
}).listen(5000, () => console.log('Server is running'))



/* res.write() // resposta q server da
    res.end() // pedido que sempre fazemos */