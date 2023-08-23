const nodemailer = require('nodemailer');
const aws = require('aws-sdk');

// Set up AWS SES configuration
aws.config.update({
    accessKeyId: 'AKIAZWSKCFF4S73QBL5T',
    secretAccessKey: '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',
    region: 'US East'  // or whatever region you're using
  });

  const ses = new aws.SES({
    apiVersion: '2010-12-01'
  });

  const transporter = nodemailer.createTransport({
    SES: ses,
    sendingRate: 10  // max 10 messages/second
  });

async function sendEmail() {
    const mailOptions = {
        from: 'chevyjd2007@gmail.com', 
        to: 'chevyjd20079@gmail.com',
        subject: 'dumb fucking potato',
        text: 'send nudes pls',
    };

    try {
        await transporter.sendEmail(mailOptions);
        console.log("success")
        return {success : true};
    } catch (error) {
        console.log("error")
        return {success : false, error}
    }
}

module.exports = {sendEmail};