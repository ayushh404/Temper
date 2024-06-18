import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:20
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true});
//In Mongoose, setting timestamps: true in a schema automatically adds two properties to each document created from that schema:
// createdAt: This timestamp records when the document was created.
// updatedAt: This timestamp records the last time the document was updated.
export const User = mongoose.models?.User || mongoose.model("User", userSchema);