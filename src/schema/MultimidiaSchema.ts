import mongoose from "mongoose";
import { MultimidiaModel } from "../models/MultimidiaModel";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

delete mongoose.models.Multimidia

const multimidiaSchema = new Schema<MultimidiaModel>(
    {
        name: {
            type: String,
            required: true,
        },
        path:{
            type: String,
            required: true,
        },
        originalName: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const MultimidiaSchema = mongoose.model('Multimidia', multimidiaSchema)

export default MultimidiaSchema;