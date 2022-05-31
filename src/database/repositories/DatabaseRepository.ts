require('dotenv').config();
import Cryptr from 'cryptr';
import fs from 'fs';
import { join } from 'path';
import { DatabaseError } from '../../entities/errors/DatabaseError.error.model';
import { Post } from "../../entities/Post";
import { User } from "../../entities/User";
import { IFindAllOptions, IFindOptions } from '../Models/IFind.Model';
import { IRemove } from '../Models/IRemove.model';
import { IUpdate } from '../Models/IUpdate.Mode';

const cryptr = new Cryptr(process.env.CRYPTR_SECRET_KEY);

const ecryptAndSave = async (data: object, table: string) => {
    const filePath = join(__dirname, `../data/${table}.db`);
    const encryptedData = cryptr.encrypt(JSON.stringify(data));
    fs.writeFileSync(filePath, encryptedData);
}

const loadAndDecrypt = (table: string) => {
    const filePath = join(__dirname, `../data/${table}.db`);

    if (!fs.existsSync(filePath)) {
        return { exists: false, json: null };
    }

    const json = fs.readFileSync(filePath, 'utf8');
    const decryptedJson = cryptr.decrypt(json);
    const jsonParsed = JSON.parse(decryptedJson);
    return { exists: true, json: jsonParsed };
}

export const create = async (data: User | Post): Promise<DatabaseError> => {
    const table = data.constructor.name;
    const { exists, json } = loadAndDecrypt(table);

    try {
        if (exists) {
            json.push(data);
            ecryptAndSave(json, table);
        }
        else {
            ecryptAndSave([data], table);
        }
    }
    catch (err) {
        return new DatabaseError('Fail to create data');
    }
}

export const update = async ({ TABLE, WHERE, VALUE }: IUpdate): Promise<DatabaseError> => {
    const { exists, json } = loadAndDecrypt(TABLE);

    try {
        if (exists) {
            const index = json.findIndex(item => item.id === WHERE);
            json[index] = { ...json[index], ...VALUE, updated: new Date().toISOString() };
            ecryptAndSave(json, TABLE);
        }
    } catch (error) {
        return new DatabaseError('Error to find the data');
    }
}

export const findOne = async ({ TABLE, WHERE, VALUE }: IFindOptions): Promise<object> => {
    const { exists, json } = loadAndDecrypt(TABLE);
    try {
        if (exists) {
            const data = json.find(data => data[WHERE] === VALUE);
            return data;
        } else {
            return new DatabaseError('This user does not exist!');
        }
    }
    catch (err) {
        return new DatabaseError('Error to find the data');
    }
}

export const findAll = async ({ TABLE }: IFindAllOptions): Promise<DatabaseError | object[]> => {
    const { exists, json } = loadAndDecrypt(TABLE);
    try {
        if (exists) {
            return json;
        }
    }
    catch (err) {
        return new DatabaseError('Table not found');
    }
}

export const remove = async ({ TABLE, WHERE }: IRemove): Promise<DatabaseError> => {
    const { exists, json } = loadAndDecrypt(TABLE);

    try {
        if (exists) {
            const index = json.findIndex(item => item.id === WHERE);
            json.splice(index, 1);
            ecryptAndSave(json, TABLE);
        }
    } catch (err) {
        return new DatabaseError('Error to find the data');
    }
}
