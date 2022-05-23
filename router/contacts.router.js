// imports
const router = require('express').Router()
const contactsController = require('../controllers/contacts.controllers')

// respuestas de las rutas

router.get('/info', (req, res) => {
    res.send(`Phonebook has contact ${contactsController.calendarEntries()}`)
})

// obtener todos los contactos
router.get('/', (req, res) => {
    res.json(contactsController.getAllContacts())
})

//obtener un contacto en especifico
router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const contact = (contactsController.getContact(id))
    contact ? res.json(contact) : res.status(400).json({ message: "try again verify id" })
})

// agregar un contacto esto aun no funciona
router.post('/', (req, res) => {
    const data = req.body
    const response = contactsController.addContact(data)
    res.status(201).json(response)
})

//elimina un contacto
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    contactsController.deleteContact(id)
    res.status(204).json()
})

// edita un contacto
router.put('/:id', (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    const response = contactsController.editContact(id, data)
    res.status(201).json(response)
})

exports.router = router