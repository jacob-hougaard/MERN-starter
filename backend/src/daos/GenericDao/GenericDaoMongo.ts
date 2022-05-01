import {IUser} from "@entities";
import GenericSchema, {IGenericModel} from "../../models/GenericMongoModel";
import GenericMongoModel from "../../models/GenericMongoModel";

export interface IGenericDao {
    getAll: () => Promise<IGenericModel[]>;
    add: () => Promise<void>;
    update: () => Promise<void>;
    delete: () => Promise<void>;
}

export class GenericDao implements IGenericDao{
    add(): Promise<void> {
        return Promise.resolve(undefined);
    }

    delete(): Promise<void> {
        return Promise.resolve(undefined);
    }

    async getAll(): Promise<IGenericModel[]> {
        try {
            console.log('GETTING ALL')
            let result = await GenericSchema.find({});
            console.log(result);
            return result;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    update(): Promise<void> {
        return Promise.resolve(undefined);
    }

}