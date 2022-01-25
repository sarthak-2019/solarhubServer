const axios = require("axios");
const db = require("./../firebase");
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
      `${process.env.DISCOURSE_URL}/categories.json`,
      {
        headers: {
          "Api-Key": process.env.DISCOURSE_API_KEY,
          "Api-Username": process.env.DISCOURSE_ADMIN_USERNAME,
        },
      }
    );
    let topics = 0;
    let post = 0;
    for (let i = 0; i < response1.data.category_list.categories.length; i++) {
      topics += response1.data.category_list.categories[i].topic_count;
      post += response1.data.category_list.categories[i].post_count;
    }
    res
      .status(201)
      .json({ total_users: noUsers, total_topics: topics, total_posts: post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
