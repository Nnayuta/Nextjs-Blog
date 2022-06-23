import mongoose from "mongoose";
import { SettingsModel } from "../models/SettingsModel";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

delete mongoose.models.Settings;

const settingsSchema = new Schema<SettingsModel>(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        icone: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

const SettingsSchema = mongoose.model('Settings', settingsSchema)

export default SettingsSchema;