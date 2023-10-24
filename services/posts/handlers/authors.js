const authors = require("../../../pkg/authors");

const getAll = async (req, res) => {
  try {
    let au = await authors.getAll();
    res.status(200).send(au);
  } catch (err) {
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getAll,
};
