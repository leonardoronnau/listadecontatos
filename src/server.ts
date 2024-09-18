 import  express from "express";
 import helmet from "helmet";
 import router from "./routes";


 const server = express();


 server.use(helmet())
 server.use(express.json())
 server.use(express.urlencoded({extended: true}))


 server.use('/', router)

565

 server.listen(3000, () => {
    
 })
