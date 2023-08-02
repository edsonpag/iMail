import { Request, Response } from 'express'
import FirebaseService from '../services/FirebaseService.js'
import NodemailerService from '../services/NodemailerService.js'
import Email from '../interfaces/Email.js'

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
        const body = req.body
        const value: Email = {
            from: body.from,
            to: body.to,
            subject: body.subject,
            text: body.text,
            fullname: body.fullname,
            profession: body.profession,
            shootingDate: new Date(body.shootingDate),
            sent: false
        }
        this.firebaseService.save(collection, value)
        res.json({
            message: "Email salvo com sucesso"
        })
    }
}
