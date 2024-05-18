import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://wasif:1234@cluster0.xbmo4td.mongodb.net/solvative`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.log(error)
        process.exit(1);
    }
};

export default connectDb;
