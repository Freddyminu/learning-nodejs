const http = require('http') // http e tudo relacionado sao tipo biblitecas esse require
const fs = require('fs') // arquivos
const path = require('path') // boa pratica de encontro do melhor caminho possivel pro arquivo


http.createServer((req, res) => {
    

    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file) // localhost:5000/file
    const extname = path.extname(filePath)

    const allowedFileTypes = ['.html','.css','.js']
    const allowed = allowedFileTypes.find( item=> item == extname )

    if(!allowed) return
    
    fs.readFile(
        filePath,
        (err, content) => { // err eh erro n sei pq precisa colocar e content eh o conteudo 
            if(err) throw err
            
            res.end(content)
        }
    )
 
    
}).listen(5000, () => console.log('Server is running'))













/* res.write() // resposta q server da
    res.end() // pedido que sempre fazemos */