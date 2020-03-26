const mainscript = require("./index.js")
const CronJob = require('cron').CronJob

console.log('Before job instantiation')
const job = new CronJob('0/2 * * * * *', function () {
    // mainscript.sendSMS()
    mainscript.sendMail().catch(console.error)
    console.log('Message sent')
})
console.log('After job instantiation')
job.start()