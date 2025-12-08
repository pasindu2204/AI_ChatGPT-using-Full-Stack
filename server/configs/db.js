
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Mongoose connected"));
         await mongoose.connect(`${process.env.MONGODB_URI}/AIGPT`)
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;

