import { NextResponse } from "next/server";
import { User } from "@/lib/usermodel";
import { connectToDb } from "@/lib/db";
const bcrypt = require('bcrypt');

export const POST = async(request) =>{
    const data = await request.json();
    const {firstName, lastName, email, password} = data;
    // console.log(firstName, lastName, email, password);

    await connectToDb();

    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password : hashedPassword,
    }

    try{
        await User.create(newUser);
    }catch(e){
        return new NextResponse('Failed to Register, try after some time',{
            status:500,
        });
    }
    //Encrypt the password
    //Form a DB Payload
    //Update the DB
    return new NextResponse('User created',{
        status:201,
    });
}