"use strict"
const fetch = require('node-fetch')
const phone = '+2349022631479'
const smsMessage = 'Good day, This is to inform you that the light unit in the office will finish in the next 24hours. Kindly send money to benson to load the light unit. Thanks In anticipation of your response. -AWLOLECTRIC BOT.'
const smsFrom = 'AWLO BOT'
const token = 'IF0WLu86pvylyphsaYMDuYHGRFAbJBBA9h7pF5Is7As5Rq9U1qOLxkGtoSHI'
const nodemailer = require('nodemailer')
require('dotenv').config()

const sendSMS = () => {  
fetch(
    `https://www.bulksmsnigeria.com/api/v1/sms/create?api_token=${token}&from=${smsFrom}&to=${phone}&body=${smsMessage}&dnd=2`
    ) 
.then(res => res.text())
.then(body => console.log(body))
.catch(err => console.log(err))
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const mailOptions = {
    from: '"AWLO BOT" ', // sender address
    to: 'bensonanyanime@gmail.com', // list of receivers
    subject: 'Light Notification', // Subject line
    html: '<p>Good day, This is to inform you that in the next 24hours light will go off in the office. Kindly send money to Benson to load the light. Thanks. -AWLO BOT</p>'// plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
// sendSMS()