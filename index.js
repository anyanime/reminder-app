"use strict"
const fetch = require('node-fetch')
const phone = '+2349022631479'
const smsMessage = 'Good day, This is to inform you that the light unit in the office will finish in the next 24hours. Kindly send money to benson to load the light unit. Thanks In anticipation of your response. -AWLOLECTRIC BOT.'
const smsFrom = 'AWLO BOT'
const token = 'IF0WLu86pvylyphsaYMDuYHGRFAbJBBA9h7pF5Is7As5Rq9U1qOLxkGtoSHI'

const sendSMS = () => {  
fetch(
    `https://www.bulksmsnigeria.com/api/v1/sms/create?api_token=${token}&from=${smsFrom}&to=${phone}&body=${smsMessage}&dnd=2`
    ) 
.then(res => res.text())
.then(body => console.log(body))
.catch(err => console.log(err))
}

sendSMS()