const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const uploader = multer({
  dest: path.resolve('uploads', 'temp')
})

router.post('/upload', uploader.single('xxx'), async(req, res) => {
  const { filename, originalname } = req.file

  const from = path.resolve('uploads', 'temp', filename)
  const to = path.resolve('uploads', originalname)

  fs.renameSync(from ,to)

  res.json({ status: `${originalname} has been uploaded successfully`})
})

module.exports = router