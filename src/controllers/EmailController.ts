import { Request, Response } from 'express'
import FirebaseService from '../services/FirebaseService.js'
import NodemailerService from '../services/NodemailerService.js'

export default class EmailController {
    
    nodemailerService = new NodemailerService()

    firebaseService = new FirebaseService()

    store = async (req: Request, res: Response) => {
        const collection = 'Email'
        const body = req.body
        const value = {
            ...body,
            sent: false,
            shootingDate: new Date(body.shootingDate),
            template: `email-${body.templateCode}`
        }
        this.firebaseService.save(collection, value)
        res.json({
            message: "Email salvo com sucesso"
        })
    }
}
