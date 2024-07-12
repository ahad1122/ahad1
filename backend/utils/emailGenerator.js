const nodemailer = require('nodemailer');

async function sendEmail(to, pdfBuffer) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    await transporter.sendMail({
        from: 'your-email@gmail.com',
        to,
        subject: 'Your Vehicle Details',
        text: 'Attached is the PDF document containing your vehicle details.',
        attachments: [{
            filename: 'vehicle-details.pdf',
            content: pdfBuffer
        }]
    });
}

module.exports = { sendEmail };