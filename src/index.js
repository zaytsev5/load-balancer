const express = require('express')
const app = express()
const port = process.env.PORT 
app.get('/', (req, res) =>{
  res.send({
    msg: `App running on port ${port}`
  })
})
app.listen(port, () => console.log(`Server is running on port ${port}`))