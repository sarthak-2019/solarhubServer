const axios = require("axios");
exports.getAllCategories = async (req, res) => {
  try {
    const response1 = await axios.get(
      `${process.env.DISCOURSE_URL}/categories.json`,
      {
        headers: {
          "Api-Key": process.env.DISCOURSE_API_KEY,
          "Api-Username": process.env.DISCOURSE_ADMIN_USERNAME,
        },
      }
    );
    let data = [];
    for (let i = 0; i < response1.data.category_list.categories.length; i++) {
      let temp = {};
      temp.category_id = response1.data.category_list.categories[i].id;
      temp.category_name = response1.data.category_list.categories[i].name;
      temp.category_slug = response1.data.category_list.categories[i].slug;
      data.push(temp);
    }
    res.status(201).json({ Categories: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
