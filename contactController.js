const contacts = require('./Contacts')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createContact = (req, res) => {
    let { name, phone, email } = req.body
    let contact = contacts.createContact({
        name, phone, email
    })

    res.json(contact)
}

exports.getContactById = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let contact = contacts.getContactById(id)

    res.json(contact)
}

exports.updateContactById = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let { name, phone, email } = req.body
    let contact = contacts.updateContactById(id, {name,phone,email})

    res.json(contact)
}

exports.deleteContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let contact = contacts.deleteContactById(id)

    res.json(contact)
}