const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'nodejs.upscale9@gmail.com',
        pass: 'ABCD@1234'
    }
});

module.exports = sendMail = () => {
    try {
        let mailDetails = {
            from: 'nodejs.upscale9@gmail.com',
            to: 'np354813@gmail.com',
            subject: 'Test mail',
            text: 'Node.js testing mail for upscale'
        };
        
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs', err);
            } else {
                console.log('Email sent successfully');
            }
        });
    } catch (Err) {
        console.log(Err)
    }
}
sendMail()