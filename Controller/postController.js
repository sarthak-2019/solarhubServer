const axios = require("axios");
exports.getLatestTopics = async (req, res) => {
  var config = {
    method: "get",
    url: `${process.env.DISCOURSE_URL}/latest.json`,
    headers: {
      "Api-Key": process.env.DISCOURSE_API_KEY,
      "Api-Username": process.env.DISCOURSE_ADMIN_USERNAME,
    },
  };
  try {
    axios(config)
      .then(function (response) {
        res.status(201).json({ data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
exports.getLatestPost = async (req, res) => {
  var config = {
    method: "get",
    url: `${process.env.DISCOURSE_URL}/t/${req.query.id}/posts.json`,
    headers: {
      "Api-Key": process.env.DISCOURSE_API_KEY,
      "Api-Username": process.env.DISCOURSE_ADMIN_USERNAME,
    },
  };
  try {
    axios(config)
      .then(function (response) {
        res.status(201).json({ data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
exports.createTopic = async (req, res) => {
  console.log(req.body);
  var data = JSON.stringify({
    raw: req.body.data,
    title: req.body.title,
  });
  var config = {
    method: "post",
    url: `${process.env.DISCOURSE_URL}/posts.json`,
    headers: {
      "Api-Key": process.env.DISCOURSE_API_KEY,
      "Api-Username": process.env.DISCOURSE_ADMIN_USERNAME,
      "Content-Type": "application/json",
    },
    data: data,
  };
  console.log(config);
  try {
    // axios(config)
    //   .then(function (response) {
    //     res.status(201).json({ data: response.data });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    res.status(201).json({ data: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
