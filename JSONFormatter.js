var contacts_list = require('./contacts_list')
var addresses_list = require('./addresses_list')

module.exports = {
  getAll: function(requestType, id){
    if(requestType==='contact'){
      return contacts_list
    } else {
      return addresses_list
    }
  },
  getRecord: function(requestType, id){
    if(requestType==='contact'){
      return contacts_list.find( contact => Number(contact.id) === Number(id))
    } else {
      return addresses_list.find( addr => Number(addr.id) === Number(id))
    }
  }
}
