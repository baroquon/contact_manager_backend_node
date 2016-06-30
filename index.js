var app = require('express')()
var JSONformatter = require('./JSONFormatter')

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    next()
})

app.get('/contacts', function(req, res) {
  res.json({ data: JSONformatter.getAll('contact') })
})
app.get('/contacts/:id', function(req, res) {
  res.json({ data: JSONformatter.getRecord('contact', req.params.id) })
})
app.get('/addresses', function(req, res) {
  res.json({ data: JSONformatter.getAll('address') })
})
app.get('/addresses/:id', function(req, res) {
  res.json({ data: JSONformatter.getRecord('address', req.params.id) })
})
app.listen(4000)
