const app = require('express')()

app.get('/test', (req, res) => {
   return res.json({message: "Hello World 32"})
})

app.listen(3333)
