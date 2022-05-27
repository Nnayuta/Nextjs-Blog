import fs from 'fs';
import { join } from 'path';

import { Post } from "../../entities/Post";
import { User } from "../../entities/User";

export const create = async (data: User | Post): Promise<void> => {
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
        console.log(err);
    }
}

export const findOne = async (type: string, id: string): Promise<any> => {
    const fileName = type;
    const filePath = join(__dirname, `../data/${fileName}.json`);
    const file = fs.existsSync(filePath);

    try {
        if (file) {
            const json = fs.readFileSync(filePath, 'utf8');
            const dataArray = JSON.parse(json);
            const data = dataArray.find(data => data.id === id);
            return data;
        }else{
            return new Error('ID not found');
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const findAll = async (type: string): Promise<any> => {
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
        return new Error('Table not found');
    }
}

export const update = async (data: User | Post): Promise<void> => {
    throw new Error("Method not implemented.");
}

export const remove = async (id: string, data: User | Post): Promise<void> => {
    throw new Error("Method not implemented.");
}
