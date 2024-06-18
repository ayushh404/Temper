"use server"

import { signIn, signOut } from "./auth";

export const doSocialLogin = async(formData) => {
    const action =  formData.get('action');
    await signIn(action,{redirectTo:"/" });
}

export const doLogout = async() =>{
    await signOut({redirectTo:"/"});
}

export const doCredentialsLogin = async(formData) =>{
    const {email, password} = Object.fromEntries(formData);
    try{
        const response = await signIn("credentials",{
            email: email,
            password: password,
            redirect: false,
        });
        return response;
    }catch(e){
        throw new Error(e);
    }
}



