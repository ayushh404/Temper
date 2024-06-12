"use server"

import { signIn, signOut } from "./auth";

export const doSocialLogin = async(formData) => {
    const action =  formData.get('action');
    await signIn(action,{redirectTo:"/" });
}

export const doLogout = async() =>{
    await signOut({redirectTo:"/"});
}



