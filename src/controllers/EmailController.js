import FirebaseService from '../services/FirebaseService.js';
import NodemailerService from '../services/NodemailerService.js';

export default class EmailController {
    
    nodemailerService = new NodemailerService()

    firebaseService = new FirebaseService()

    send = async (req, res) => {
        const emailOptions = req.body
        try {
            res.json(await this.nodemailerService.sendEmail(emailOptions))
        } catch (err) {
            res.json(err)
        }
    }
    
    save = async (req, res) => {
        const email = req.body
        await this.firebaseService.save('emails', email)
        res.json({
            message: "Email salvo com sucesso"
        })
    }
}
