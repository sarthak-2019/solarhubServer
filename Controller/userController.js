const axios = require("axios");

exports.signup = async (req, res) => {
  // const { email, password, firstName, lastName } = req.body;

  var data = JSON.stringify({
    name: "Yash Shivhare",
    email: "vs.doce@gmail.com",
    password: "shivhare10shivhare10",
    username: "shivhare10",
    active: true,
    approved: true,
    "user_fields[1]": "sed dolor",
  });
  var config = {
    method: "post",
    url: "{{baseUrl}}/users.json",
    headers: {
      "Api-Key": "{{apikey}}",
      "Api-Username": "{{apiusername}}",
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    axios(config)
      .then(function (response) {
        res.status(201).json({ data: "Success" });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
