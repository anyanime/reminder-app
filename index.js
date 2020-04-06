"use strict"
const fetch = require('node-fetch')
const phone = '+2349022631479'
const smsMessage = 'Oops AWLO office is running out of light units! There will be power-outage in 24 hours. Load more units now.  -AWLOLECTRIC BOT.'
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
        service: process.env.EMAIL_HOST,
        port: 587,
        secure: true,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const mailMessage = {
    from: '"AWLO ELECTRICITY BOT"', // sender address
    to: 'bensonanyanime@gmail.com, me@ekeminiakpakpan.com', // list of receivers
    subject: 'Light Notification', // Subject line
  html: '<p>Oops AWLO office is running out of light units! There will be power-outage in 24 hours. Load more units now. -AWLO BOT</p>'// plain text body
  };
  
 const sendMail = transporter.sendMail(mailMessage, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 })

// sendSMS()