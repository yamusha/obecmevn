const router = require('express').Router()

const employees = [1, 2, 3, 4, 5]

router.get('/', (req, res) => {
  res.json(employees)
})

router.post('/', (req, res) => {
  // console.log(req.body);
  res.json({employee: req.body})
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  // const result = employees.filter(each => each === parseInt(id) )

  const employee = employees.find(each => each === parseInt(id) )

  res.json({ employee: employee})
})

router.put('/:id', (req, res) => {
  const { id } = req.params

  res.json({ id: id, name: req.body.name})
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  const employee = employees.filter(each => each != parseInt(id))
  res.json({ employees: employee })
})

module.exports = router