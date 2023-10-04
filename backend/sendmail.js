const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config;


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS
    },
})

async function sendEmail(recipientEmail, emailSubject, link) {
    const mailOption = {
        from: 'noreply@reeltalk.com',
        to: recipientEmail,
        subject: emailSubject,
        text: `Follow this link to verify your email address. 
        ${link}`
    }

    await transporter.sendMail(mailOption, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Email sent!")
        }
    })
}

module.exports = { sendEmail };