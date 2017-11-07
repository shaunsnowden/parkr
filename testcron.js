var CronJob = require('cron').CronJob;
var job = new CronJob({
  cronTime: '0 * * * *', // run job at he start of every hour
//   cronTime: '*/15 * * * *', // run job every 15 minutes
  onTick: function() {
    /*
     * Runs every weekday (Monday through Friday)
     * at 11:30:00 AM. It does not run on Saturday
     * or Sunday.
     */
  },
  start: false,
  timeZone: 'America/Denver'
});
job.start();


// ---------------- How to check if a cron pattern is valid:----------------------------
// try {
//     new CronJob('invalid cron pattern', function() {
//         console.log('this should not be printed');
//     })
// } catch(ex) {
//     console.log("cron pattern not valid");
// }


// ---------------- How to check if a job is running ----------------
// var cron = require('cron');
 
// var job1 = new cron.CronJob({
//   cronTime: '0 * * * *',
//   onTick: function() {
//     console.log('job 1 ticked');
//   },
//   start: false,
//   timeZone: 'America/Denver'
// });
 
// var job2 = new cron.CronJob({
//   cronTime: '0 * * * *',
//   onTick: function() {
//     console.log('job 2 ticked');
//   },
//   start: false,
//   timeZone: 'America/Denver'
// });
 
// console.log('job1 status', job1.running); // job1 status undefined
// console.log('job2 status', job2.running); // job2 status undefined
 
// job1.start(); // job 1 started
 
// console.log('job1 status', job1.running); // job1 status true
// console.log('job2 status', job2.running); // job2 status undefined