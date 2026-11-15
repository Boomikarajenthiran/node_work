import express from 'express' 
import { addData, getDatas } from '../controller/authController.js'

// http://localhost:5000/api/auth/useradding

// http://localhost:5000/api/auth/userdatas

const route = express.Router()


route.post("/useradding",addData)

route.get("/userdatas",getDatas)


export default route