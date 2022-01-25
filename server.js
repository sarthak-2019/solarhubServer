const app = require("./app");
const dotenv = require("dotenv");
const TopicCron = require("./CronSchedule/discourseTopic");
dotenv.config();
// Starting the Server
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on Port ${port}...`);
});
// TopicCron();
