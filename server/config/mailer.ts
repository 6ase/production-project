import nodemailer from 'nodemailer';

const sendMail = (to: String, activationLink: String) => {
    const transporter = nodemailer.createTransport({
        host:'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAILER_LOGIN,
            pass: process.env.MAILER_PASSWORD,
        }
    });
    const mailOptions = {
        from: process.env.MAILER_LOGIN,
        to: to.toString(),
        subject: 'Активация аккаунта на ' + process.env.CLIENT_URL,
        text: '',
        html:
        `
        <div>
            <h1>Для активации перейдите по ссылке </h1>
            <a href='${activationLink}'>${activationLink}</a>
        </div>
        `
    };
    transporter.sendMail(mailOptions);
}
export default {
    sendMail
}

