import mongoose from "mongoose";


export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(process.env.MONGO_URI);
            console.log("MongoDB connected")
        } catch (err) {
            console.log(err)
        }
    }

    public async close(): Promise<void> {
        try {
            await mongoose.connection.close();
            console.log("MongoDB disconnected")
        } catch (err) {
            console.log(err)
        }
    }
}