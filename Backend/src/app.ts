import express, { json, } from "express";
import { getRouter } from "./Routes";
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT

app.use(getRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server running at port ${port}`);
    
})