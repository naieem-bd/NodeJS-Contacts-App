const router = require('express').Router()

// dammy comment

const {
    getAllContacts,
    createContacts
} = require('./contactController')

router.get('/', getAllContacts)
router.post('/', createContacts)
// router.get('/:id')
// router.put('/:id')
// router.delete('/:id')

module.exports = router