const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New Connection')
    res.end('hello world - Git CD')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening on ', { PORT }))
