require('dotenv').config()
const express = require('express')
const app = express()
const authRouter = require('./Routes/authRouter')




app.use('/auth', authRouter)




const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})