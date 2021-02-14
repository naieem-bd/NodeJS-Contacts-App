const express = require('express')
const morgan = require('morgan')

const contactRoutes = require('./contactRoutes')

const app = express()
app.use(morgan('dev'))

app.use('/contacts', contactRoutes)

app.get('*', (req, res) => {
    res.send('<p>please use the correct routes</p>')
})

const PORT = process.env.PORT || 2727
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})