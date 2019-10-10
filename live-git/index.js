const app = require('express')()

app.get('/test', (req, res) => {
   return res.json({message: "Hello World 2"})
})

app.listen(3333)