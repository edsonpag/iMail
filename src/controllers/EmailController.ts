import { Request, Response } from 'express';
import FirebaseService from '../services/FirebaseService.js';
import NodemailerService from '../services/NodemailerService.js';

export default class EmailController {
    
    nodemailerService = new NodemailerService()

    firebaseService = new FirebaseService()

    send = async (req: Request, res: Response) => {
        const emailOptions = req.body
        try {
            res.json(await this.nodemailerService.sendEmail(emailOptions))
        } catch (err) {
            res.json(err)
        }
    }
    
    save = async (req: Request, res: Response) => {
        const collection = 'Email'
        const value = req.body
        this.firebaseService.save(collection, value)
        res.json({
            message: "Email salvo com sucesso"
        })
    }
}
