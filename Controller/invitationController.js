exports.sendInvitation = async (req, res) => {
  try {
    res.status(201).json({ data: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
