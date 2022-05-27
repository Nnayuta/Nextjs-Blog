import fs from 'fs';
import { join } from 'path';
import { DatabaseError } from '../../entities/errors/DatabaseError.error.model';

import { Post } from "../../entities/Post";
import { User } from "../../entities/User";

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

// Pesquisa um dado: 'where'= qual registro | 'what': oque vamos procurar
export const findOne = async (type: string, where: string, what: string): Promise<Object | DatabaseError> => {
    const fileName = type;
    const filePath = join(__dirname, `../data/${fileName}.json`);
    const file = fs.existsSync(filePath);

    try {
        if (file) {
            const json = fs.readFileSync(filePath, 'utf8');
            const dataArray = JSON.parse(json);
            const data = dataArray.find(data => data[where] === what);
            return data;
        }else{
            return new DatabaseError('This user does not exist!');
        }
    }
    catch (err) {
        return new DatabaseError('Error to find the data');
    }
}

export const findAll = async (type: string): Promise<Object[] | DatabaseError> => {
    const filePath = join(__dirname, `../data/${type}.json`);
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
