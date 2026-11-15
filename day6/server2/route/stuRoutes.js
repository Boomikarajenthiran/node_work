import express from 'express'

import {deletecontroller, getcotroller, stuController, updatecontroller} from '../controller/stucontroller.js'

const route = express.Router()


// http://localhost:5000/api/students/studentadding

// http://localhost:5000/api/students/userstudent

// http://localhost:5000/api/students/update/:id

// http://localhost:5000/api/students/delete/:id


route.post("/studentadding",stuController)

route.get("/userstudent",getcotroller)

route.put('/update/:id',updatecontroller)

route.delete('/delete/:id',deletecontroller)

export default route