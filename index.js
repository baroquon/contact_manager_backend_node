var app = require('express')()
var mongoose = require('mongoose')

var jsonApiify = (contact) => {
  var JSONContact = {
    id: contact.id,
    type: 'contacts',
    attributes: {
      "first-name": contact.firstName,
      "last-name": contact.lastName,
      "email": contact.email,
      "phone": contact.phone
    }
  }
  return JSONContact
}

mongoose.connect('mongodb://localhost/contactsEmberData')

var db = mongoose.connection

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    next()
})

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var contactSchema = mongoose.Schema({
      firstName: String,
      lastName: String,
      email: String,
      phone: String
  });
  var Contact = mongoose.model('Contact', contactSchema);

  // Remove all contacts if you are so inclined
  // Contact.remove({}, () => true)

  // If we don't have any contacts we'll create some so we can see things.
  Contact.find(function (err, contacts) {
    if (err) return console.error(err)
    if(contacts.length === 0){
      var contact1 = new Contact({ firstName: 'Brandon', lastName: 'Jones', email: 'brandon@example.com', phone: '255-555-5433' })
      var contact2 = new Contact({ firstName: 'Sarah', lastName: 'Peterson', email: 'sarah@example.com', phone: '255-555-2342' })
      var contact3 = new Contact({ firstName: 'Josh', lastName: 'James', email: 'josh@example.com', phone: '255-555-5343' })
      var contact4 = new Contact({ firstName: 'Adam', lastName: 'Norm', email: 'adama@example.com', phone: '255-555-6555' })

      contact1.save()
      contact2.save()
      contact3.save()
      contact4.save()
    }
  })
  app.get('/contacts', function(req, res) {
    Contact.find(function (err, contacts) {
      if (err) return console.error(err);

      var formattedContact = []
      contacts.forEach((contact)=>{
        formattedContact.push(jsonApiify(contact))
      })
      res.json({ data: formattedContact})
    })
  })
  app.get('/contacts/:id', function(req, res) {
    Contact.findById(req.params.id, function(err, contact){
      if (err) return console.error(err)
      res.json({ data: jsonApiify(contact)})
    })
  })
  app.delete('/contacts/:id', function(req, res) {
    Contact.findById(req.params.id, function(err, contact){
      if (err) return console.error(err)
      contact.remove(function(err) {
        if(err) return console.error(err)
        return res.sendStatus(204);
      });
    })
  })
})

app.listen(4000)
