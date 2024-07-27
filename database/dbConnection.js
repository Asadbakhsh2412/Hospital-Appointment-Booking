import mongoose from "mongoose";


export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "FINAL_HOSPITAL_MANAGE",
    })
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((error)=>{
        console.log("Error connecting to MongoDB", error);
    })
}