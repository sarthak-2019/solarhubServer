const axios = require("axios");
exports.getLatestStats = async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.DISCOURSE_URL}/admin/users/list/active.json`,
      {
        headers: {
          "Api-Key": process.env.DISCOURSE_API_KEY,
          "Api-Username": process.env.DISCOURSE_ADMIN_USERNAME,
        },
      }
    );
    const noUsers = response.data.length;
    const response1 = await axios.get(
      `${process.env.DISCOURSE_URL}/latest.json?no_definitions=true&page=0`,
      {
        headers: {
          "Api-Key": process.env.DISCOURSE_API_KEY,
          "Api-Username": process.env.DISCOURSE_ADMIN_USERNAME,
        },
      }
    );
    console.log(response1.data);
    res.status(201).json({ data: "success" });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
