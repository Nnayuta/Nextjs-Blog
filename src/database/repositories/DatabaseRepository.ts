import fs from 'fs';
import { join } from 'path';
import { DatabaseError } from '../../entities/errors/DatabaseError.error.model';

import { Post } from "../../entities/Post";
import { User } from "../../entities/User";

import { IFindAllOptions, IFindOptions } from '../Models/IFind.Model';
import { IRemove } from '../Models/IRemove.model';
import { IUpdate } from '../Models/IUpdate.Mode';

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

export const update = async ({ TABLE, WHERE, VALUE }: IUpdate): Promise<DatabaseError> => {
    const filePath = join(__dirname, `../data/${TABLE}.json`);
    const file = fs.existsSync(filePath);

    try {
        if (file) {
            const json = fs.readFileSync(filePath, 'utf8');
            const dataArray = JSON.parse(json);
            const index = dataArray.findIndex(item => item.id === WHERE);

            dataArray[index] = { ...dataArray[index], ...VALUE, updated: new Date().toISOString() };

            fs.writeFileSync(filePath, JSON.stringify(dataArray));
        }
    } catch (error) {
        return new DatabaseError('Error to find the data');
    }
}

export const findOne = async ({ TABLE, WHERE, VALUE }: IFindOptions): Promise<object> => {
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
            new DatabaseError('This user does not exist!');
        }
    }
    catch (err) {
        new DatabaseError('Error to find the data');
    }
}

export const findAll = async ({ TABLE }: IFindAllOptions): Promise<DatabaseError | object[]> => {
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

export const remove = async ({ TABLE, WHERE }: IRemove): Promise<DatabaseError> => {
    const filePath = join(__dirname, `../data/${TABLE}.json`);
    const file = fs.existsSync(filePath);

    try {
        if (file) {
            const json = fs.readFileSync(filePath, 'utf8');
            const dataArray = JSON.parse(json);
            const index = dataArray.findIndex(item => item.id === WHERE);

            dataArray.splice(index, 1);

            fs.writeFileSync(filePath, JSON.stringify(dataArray));
        }
    } catch (err) {
        return new DatabaseError('Error to find the data');
    }
}
