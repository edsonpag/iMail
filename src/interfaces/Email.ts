export default interface Email {
    from: string
    to: string
    subject: string
    templateCode: string
    fullname: string
    profession: string
    shootingDate: Date
    checkoutLink: string
    sent: Boolean
}