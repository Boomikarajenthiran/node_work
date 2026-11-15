 import http from 'http'
import dotenv from 'dotenv'
import {fileHandling} from './fileprocess/handling.js'


const app = http.createServer()

dotenv.config()

// console.log(app);

const PORT=process.env.PORT || 3000

// console.log(PORT)

fileHandling();

app.listen(PORT,()=>{

console.log(`successfully connected http://localhost ${PORT}`)


})