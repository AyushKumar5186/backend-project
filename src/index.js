import dotenv from "dotenv"

import express from "express";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000, ()=>{
    console.log(`App is running on port ${process.env.PORT}`);
})
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED !!! ", err);
    
})


// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("ERROR : ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`The App is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR : ", error);
//     throw error
//   }
// })();
