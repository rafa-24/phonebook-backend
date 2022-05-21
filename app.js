// imports
const express = require('express');
const contactsRouter = require('./router/contacts.router').router

// configurar el servidor
const app = express();
const PORT = 4500


// permite escribir retornar json en express
app.use(express.json())


// routes 
app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a tu agenda de contactos</h1>')
})

//middlewares
app.use('/contacts', contactsRouter)


app.listen(PORT, () => {
    console.log(`server on running in port ${PORT}`)
})


