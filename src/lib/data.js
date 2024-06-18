'use server'

import { User } from "./usermodel";
import { connectToDb } from "./db";

export const getUsers = async ()=>{
    try{
        await connectToDb();
        const users = await User.find();
        console.log(users)
        return users;
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
}

export const getUserByEmail = async (email)=>{
    await connectToDb();
    const found = User.findOne({email:email});
    return found;
}