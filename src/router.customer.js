const router = require('express').Router()
const Customer = require('./model.customer')

const customers = [1, 2, 3, 4, 5]

router.get('/', async(req, res) => {
  console.log(res.locals);
  try {
      const customers = await Customer.find()
      res.json(customers)
  } catch (e) {
      res.status(500)
  }
})

router.get('/:id', async(req, res) => {
  try {
    const {id} = req.params
    const customer = await Customer.find({id: parseInt(id)})

    res.json({
      customer: customer
    })
    
  } catch (e) {
    res.status(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const c =req.body
    const customer = await Customer.create(c)
    
    res.json({customer: customer})
  } catch (e) {
    res.status(500)
  }
})

// router.put('/:id', async(req, res) => {
//   try {
//     const {id} = req.params
//     const customer = await Customer.find({id: parseInt(id)})

//     if(!customer) {
//       res.json({ message : 'Not Found Customer'})
//     } else {
//       const c =req.body
//       const customer = await Customer.updateOne({ id: parseInt(id) }, {$set: c})
//       res.json({
//         customer: customer
//       })
//     }

    
    
//   } catch (e) {
//     res.status(500)
//   }
// })

router.put('/:id', async(req, res) => {
  try {
      const { id } = req.params
      const c = req.body

      const cAndDate = {...c, updateDate: new Date()}

      const customer = await Customer.updateOne({ id: parseInt(id) }, { $set: cAndDate })
      res.json(customer)
  } catch (e) {
      res.json({ message: e.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const customer = await Customer.deleteOne({ id: parseInt(id) })
    res.json(customer)
  } catch (err) {
    res.json({ message: err.message })
  }
})

module.exports = router