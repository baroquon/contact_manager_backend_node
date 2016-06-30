module.exports = [{
  id: 1,
  type: 'contacts',
  attributes: {
    "first-name": "Brandon",
    "last-name": "Jones",
    "email": "brandon@example.com",
    "phone": "205.555.3242"
  },
  relationships: {
    addresses: {
      data: [
        { id: 1, type: 'addresses'},
        { id: 2, type: 'addresses'}
      ]
    }
  }
}, {
  id: 2,
  type: 'contacts',
  attributes: {
    "first-name": "Sarah",
    "last-name": "Peterson",
    "email": "sarah@example.com",
    "phone": "255-555-2342"
  },
  relationships: {
    addresses: {
      data: [
        { id: 3, type: 'addresses'},
        { id: 4, type: 'addresses'}
      ]
    }
  }
}, {
  id: 3,
  type: 'contacts',
  attributes: {
    "first-name": "Josh",
    "last-name": "James",
    "email": "josh@example.com",
    "phone": "255-555-5343"
  },
  relationships: {
    addresses: {
      data: [
        { id: 5, type: 'addresses'},
        { id: 6, type: 'addresses'}
      ]
    }
  }
}, {
  id: 4,
  type: 'contacts',
  attributes: {
    "first-name": "Adam",
    "last-name": "Norm",
    "email": "adam@example.com",
    "phone": "255-555-6555"
  },
  relationships: {
    addresses: {
      data: [
        { id: 7, type: 'addresses'},
        { id: 8, type: 'addresses'}
      ]
    }
  }
}]
