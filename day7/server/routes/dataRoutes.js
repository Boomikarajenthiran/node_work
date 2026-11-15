
import express from 'express'

import{bodydatas, headersDatas, paramsDatas, queryDatas} from '../controller/datacontroller.js'


// http://localhost:5000/api/data/bodydata

// http://localhost:5000/api/data/paramsdata/123456789087654

// http://localhost:5000/api/data/querydata?userdata="react"

// http://localhost:5000/api/data/headersdata

const routes = express.Router()

routes.post("/bodydata",bodydatas) 

routes.get("/paramsdata/:userid",paramsDatas)

routes.get("/querydata", queryDatas)

routes.get("/headersdata", headersDatas)


export default routes


