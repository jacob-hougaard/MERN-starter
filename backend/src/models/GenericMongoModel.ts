import mongoose, { Schema, Document } from 'mongoose';

export interface IGenericModel{
    key: string;
}

const GenericSchema = new Schema({
    key: String
})

export default mongoose.model<IGenericModel>('genericModel', GenericSchema)