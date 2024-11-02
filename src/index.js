import dotenv from "dotenv"

import express from "express";
import connectDB from "./db/index.js";
// const app = express();
dotenv.config({
    path: './env'
})
connectDB();


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
