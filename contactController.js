const contacts = require('./Contacts')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createContacts = (req, res) => {
    console.log(req.body)
}