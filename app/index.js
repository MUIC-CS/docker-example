var express = require('express')

app = express()

app.get('/pjsecret', (req, res)=>{
  var obj = {
    name: 'pj',
    move: 'low-priority'
  }
  res.json(obj)
})

app.listen(3000)
console.log('listen on 3000')
