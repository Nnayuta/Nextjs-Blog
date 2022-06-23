import mongoose from 'mongoose';

class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                dbName: process.env.MONGO_DB_NAME,
            });
            
        } catch (err) {
            console.log(err)
        }
    }

    public async disconnect(): Promise<void> {
        try {
            await mongoose.disconnect();
        } catch (err) {
            console.log(err)
        }

    }
}

export const MongoDB = new MongoConnection();