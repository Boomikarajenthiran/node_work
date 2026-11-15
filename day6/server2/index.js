import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import stuRoute from './route/stuRoutes.js'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/students",stuRoute)


const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{

console.log(`student successfully executed... http://localhost:${PORT}`)

})

// http://localhost:5000/api/students
