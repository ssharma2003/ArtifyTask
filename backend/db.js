import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`, {
            dbName: `${process.env.DB_NAME}`,
        })
        console.log("Connected to MongoDB")
        
    } catch (error) {
       console.log("Error: ",error.message)
    }
}
 