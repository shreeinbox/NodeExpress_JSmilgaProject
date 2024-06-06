const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/home' ){
    res.end('this is our home page')
    } else if(req.url === '/about'){
        res.end('this is about page')
}
    res.end(`<p>Go to <a href='/home'> home</a> page</p>`)
})

server.listen(8000)