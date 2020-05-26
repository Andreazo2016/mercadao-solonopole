import Mail from '../lib/Mail';

class SendEmailContactService {
    async execute(data) {
        const { name, email, content } = data
        await Mail.sendMail({
            to: 'noreplay@mercadaodigitalsolonopole.com',
            subject: `Contato de ${name}|${email} da página`,
            text: content
        })
    }
}

export default SendEmailContactService