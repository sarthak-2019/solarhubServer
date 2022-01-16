const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
// Starting the Server
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on Port ${port}...`);
});
