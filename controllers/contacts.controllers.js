// base de datos y la logica de la aplicacion
const contactsDB = [
    {
        id: 1,
        name: "Laura",
        number: 636483784
    },
    {
        id: 2,
        name: "Camila",
        number: 244963
    },
    {
        id: 3,
        name: "Daniela",
        number: 7262836
    },
    {
        id: 4,
        name: "Kiara",
        number: 24494323
    }
]

// obtener todos lo contactos
const getAllContacts = () => {
    return contactsDB;
}

// obtiene un contacto en especifico
const getContact = (id) => {
    const searchContact = contactsDB.find((contact) => contact.id === id)
    return searchContact;
}

// TODO: esto no funciona
const addContact = (item) => {
    let newObject = {
        id: contactsDB[contactsDB - 1].id + 1,
        name: item.name,
        number: item.number
    }

    contactsDB.push(newObject)

    return contactsDB
}

//TODO: agregar deleteContact, updateContact

exports.getAllContacts = getAllContacts
exports.getContact = getContact
exports.addContact = addContact;