import nodemailer from 'nodemailer';
import AWS from "aws-sdk";

/* This is the class responsible for the business logic
* that will send emails to me from people reaching out from
* my portfolio page "contact" section.
*/
class EmailService {
    // AWS SES configurations + nodemailer transporter configs
    constructor() {
        AWS.config.update({
            accessKeyId: '',
            secretAccessKey: '',
            region: 'us-east-2'
        });

        this.transporter = nodemailer.createTransport({
            SES: new AWS.SES({
                apiVersion: '2010-12-01'
            })
        });
    }

    // Method responsible for sending emails
    async sendEmail(subject, recipient, text) {
        const mailOptions = {
            from: 'chevyjd2007@gmail.com', 
            to: 'chevyjd2007@gmail.com',
            subject: "Subject: " + subject + " | From: " + recipient,
            text,
        };

        try {
            const result = await this.transporter.sendMail(mailOptions);
            return result;
          } catch (error) {
            throw new Error(`Email sending failed: ${error.message}`);
          }
    }
}

export default EmailService;


