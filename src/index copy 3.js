const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res)=> {
  switch (req.url) {
    case "/":
      res.write('<h1>Hello Page</h1>')
      res.end()
      break;

    case "/html":
      const filename = path.resolve('public','index.html')
      const data = fs.readFileSync(filename, 'utf8')
      res.end(data)
      break;
  
    default:
      res.write('<h1>404 Page Not found</h1>')
      res.end()
      break;
  }
  
})

server.listen(3000)