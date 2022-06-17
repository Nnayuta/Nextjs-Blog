import formidable from 'formidable';
import fs from 'fs';
import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import MultimidiaSchema from '../../../schema/MultimidiaSchema';
import { MongoConnection } from '../../../services/mongoose';

export const config = {
    api: {
        bodyParser: false
    }
};

const saveFile = async (file) => {
    const data = fs.readFileSync(file.filepath);

    const fileName = file.newFilename;
    const fileFormat = file.originalFilename.split('.').pop();

    fs.writeFileSync(`./public/uploads/${fileName}.${fileFormat}`, data);
    fs.unlinkSync(file.filepath);

    const upload = await MultimidiaSchema.create({
        name: fileName,
        path: `/uploads/${fileName}.${fileFormat}`,
        originalName: file.originalFilename
    })

    await upload.save().then(() => {
        console.log('Upload salvo com sucesso!');
    }).catch(err => {
        console.log(err);
    })

    return upload;
}

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
    const Mongo = new MongoConnection();
    await Mongo.connect();

    switch (req.method) {
        case 'POST':
            const form = new formidable.IncomingForm();
            form.parse(req, async (err, fields, files) => {
                if (err) {
                    res.status(500).json({ error: err });
                    return;
                }

                const fileUploaded = await saveFile(files.file);

                Mongo.close();

                res.status(StatusCodes.CREATED).json(fileUploaded);
            });
            break
        case 'GET':
            const files = await MultimidiaSchema.find({});
            Mongo.close();
            res.status(StatusCodes.OK).json(files);
            break
        default:
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break
    }
}

export default upload;