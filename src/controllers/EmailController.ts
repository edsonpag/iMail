import { Request, Response } from 'express';
import FirebaseService from '../services/FirebaseService.js';
import NodemailerService from '../services/NodemailerService.js';

export default class EmailController {
    
    send = async (req: Request, res: Response) => {
        const emailOptions = req.body
        const nodemailerService = new NodemailerService(emailOptions)
        try {
            res.json(await nodemailerService.sendEmail())
        } catch (err) {
            res.json(err)
        }
    }
    
    save = async (req: Request, res: Response) => {
        const email = req.body
        const firebaseService = new FirebaseService('Email', email)
        firebaseService.save()
        res.json({
            message: "Email salvo com sucesso"
        })
    }
}
