export default interface Email {
    from: string
    to: string
    subject: string
    text: string
    fullname: string
    profession: string
    shootingDate: Date
    sent: Boolean
}