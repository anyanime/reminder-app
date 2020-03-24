"use strict"

const salute = 'The Management AWLO Ikeja, Lagos.'
const phone = '+2349022631479'
const smsMessage = `${salute} This is to inform you that the light unit in the office will finish in the next 24hours. Kindly send money to benson to load the light unit. Thanks In anticipation of your response. -AWLOLECTRIC BOT.`
const smsFrom = 'AWLOLECTRIC BOT'
const URL = ('https://www.bulksms.com/api/v1/sms/create')
const fetch = require('node-fetch')

// fetch(`${URL}?api_token=KKbt94pIsFsY2iRuSqgRZGYm3xwVstMaXBaH0tCMLZhj9uYvanCdtgejFUPi&from${smsFrom}&to=${phone}&body=${smsMessage}&dnd=2`)

sms = () => {
   
fetch(`${URL}?api_token=KKbt94pIsFsY2iRuSqgRZGYm3xwVstMaXBaH0tCMLZhj9uYvanCdtgejFUPi&from${smsFrom}&to=${phone}&body=${smsMessage}&dnd=2`) 
.then(res => res.json())
.then(body => console.log(body))
.catch(err => console.log(err))
}