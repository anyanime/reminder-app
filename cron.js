const mainscript = require("./index.js")
const CronJob = require('cron').CronJob

console.log('Before job instantiation')
const job = new CronJob('0/5 * * * * *', function () {
    // mainscript.sendSMS()
    mainscript.sendMail
    console.log('Message sent')
})
console.log('After job instantiation')
job.start()