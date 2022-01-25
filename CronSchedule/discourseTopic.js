var cron = require("node-cron");

const TopicCron = () => {
  cron.schedule("*/1 * * * *", () => {
    console.log("running a task every two minutes");
  });
};
module.exports = TopicCron;
