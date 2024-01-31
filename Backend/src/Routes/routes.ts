import { Request, Response, Router, json,} from "express";
import { user } from "../interface";

export const router = Router();

router.post('/register',(req:Request, res:Response) =>{
    const{name,password,phoneNumber}= req.body as {name:string,password:string,phoneNumber:number}
    user.push({name,password,phoneNumber,id:Math.floor(Math.random()*100)});
    return res.send(
        {message:"User Registred successfully, Thank you"})
});

router.get('/getUsers',(req:Request,res:Response)=>{
    return res.status(200).send(user)
})