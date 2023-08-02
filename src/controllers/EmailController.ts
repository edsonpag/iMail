import { Request, Response } from 'express';
import FirebaseService from '../services/FirebaseService.js';
import NodemailerService from '../services/NodemailerService.js';

export default class EmailController {
    
    send = async (req: Request, res: Response) => {
        const emailOptions = req.body
        try {
            res.json(await new NodemailerService(emailOptions).sendEmail())
        } catch (err) {
            res.json(err)
        }
    }
    
    save = async (req: Request, res: Response) => {
        const collection = 'Email'
        const value = req.body
        new FirebaseService(collection, value).save()
        res.json({
            message: "Email salvo com sucesso"
        })
    }
}
