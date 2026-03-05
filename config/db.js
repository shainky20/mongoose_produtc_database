import mongoose from "mongoose";    

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://shainkysoni47:Shainky0220@cluster0.lv40wp0.mongodb.net/?appName=Cluster0");
        console.log("MongDB connected");
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
};