import fs from 'fs';
import { join } from 'path';
import { DatabaseError } from '../../entities/errors/DatabaseError.error.model';

import { Post } from "../../entities/Post";
import { User } from "../../entities/User";
import { FindAllOptions, IFindOptions } from '../Models/IFind.Model';

export const create = async (data: User | Post): Promise<DatabaseError> => {
    const fileName = data.constructor.name;
    const filePath = join(__dirname, `../data/${fileName}.json`);
    const file = fs.existsSync(filePath);

    try {
        if (file) {
            const json = fs.readFileSync(filePath, 'utf8');
            const dataArray = JSON.parse(json);
            dataArray.push(data);
            fs.writeFileSync(filePath, JSON.stringify(dataArray));
        }
        else {
            fs.writeFileSync(filePath, JSON.stringify([data]));
        }
    }
    catch (err) {
        return new DatabaseError('Fail to create data');
    }
}

export const findOne = async ({ TABLE, WHERE, VALUE }: IFindOptions): Promise<DatabaseError | Object> => {
    const fileName = TABLE;
    const filePath = join(__dirname, `../data/${fileName}.json`);
    const file = fs.existsSync(filePath);

    try {
        if (file) {
            const json = fs.readFileSync(filePath, 'utf8');
            const dataArray = JSON.parse(json);
            const data = dataArray.find(data => data[WHERE] === VALUE);

            return data;
        } else {
            return new DatabaseError('This user does not exist!');
        }
    }
    catch (err) {
        return new DatabaseError('Error to find the data');
    }
}

export const findAll = async ({ TABLE }: FindAllOptions): Promise<any> => {
    const filePath = join(__dirname, `../data/${TABLE}.json`);
    const file = fs.existsSync(filePath);

    try {
        if (file) {
            const json = fs.readFileSync(filePath, 'utf8');
            const dataArray = JSON.parse(json);
            return dataArray;
        }
    }
    catch (err) {
        return new DatabaseError('Table not found');
    }
}

export const update = async (data: User | Post): Promise<void> => {
    throw new DatabaseError("Method not implemented.");
}

export const remove = async (id: string, data: User | Post): Promise<void> => {
    throw new DatabaseError("Method not implemented.");
}
