const http = require('http')
const URL = require('url')

const data = require('./url.json')

http.createServer((req, res) => {
    const { name, url } = URL.parse(req.url, true).query
    
}).listen(3000, () => console.log('Api is running'))