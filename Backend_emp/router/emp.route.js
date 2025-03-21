import {Router} from "express";
import { createemp,getemp,getempbyid,deleteEmp,updateEmp} from "../controller/emp.control.js";
import { authentication,Authorization } from "../middlewares/auth.js";

const empRouter= Router();
empRouter.post("/create",authentication,Authorization,createemp)
empRouter.get("/get",authentication,Authorization,getemp)
empRouter.get("/getbyid",authentication,getempbyid)
empRouter.post("/update",authentication,Authorization,updateEmp)
empRouter.delete("/delete",authentication,Authorization,deleteEmp)

export {empRouter}

