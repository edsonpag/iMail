const { db } = require('../firebase/firebase.js');
const NodemailerService = require('../services/NodemailerService.js');

class EmailController {
    
    nodemailerService = new NodemailerService()

    send = async (req, res) => {
        const transporter = this.nodemailerService.createTransporter()
        const emailOptions = req.body
        try {
            res.json(await this.nodemailerService.sendEmail(transporter, emailOptions))
        } catch (err) {
            res.json(err)
        }
    }
    
    save = async (req, res) => {
        const email = req.body
        console.log(email)
        await db.collection('emails').add(email)
        res.send("Rapaiz mais não é que deu boa mesmo")
    }
}


module.exports = EmailController