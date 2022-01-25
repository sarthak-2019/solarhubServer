const axios = require("axios");
exports.getAllCategories = async (req, res) => {
  var config = {
    method: "get",
    url: `${process.env.DISCOURSE_URL}/categories.json`,
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
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
