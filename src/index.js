const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./setup.mongoose')

// const router = require('./router.employee')
// app.use('/employees',router)

// app.get('/', (req, res) => {
//   res.write('<h1>Home Page</h1>')
// })
app.get('/about', (req, res) => {
  res.write('<h1>About Page</h1>')
})

app.use('/file', require('./router.file'))

app.use('/employees', require('./router.employee'))

app.use('/customers', require('./router.customer'))

app.use('/users', require('./router.user'))

app.use((req, res) => {
  res.status(404).end()
})

app.listen(3000)