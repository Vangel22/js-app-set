const mongoose = require("mongoose");
const config = require("../config");

const init = () => {
  const url = config.get("db").url;
  // ${username}: Your MongoDB username
  // ${password}: Your MongoDB password
  // ${url}: The URL of your MongoDB cluster or server (excluding the port number)
  // ${dbname}: The name of the MongoDB database you want to connect to
  const username = config.get("db").username;
  const password = config.get("db").password;
  const dbname = config.get("db").dbname;
  const dsn = `mongodb+srv://${username}:${password}@${url}/${dbname}?retryWrites=true&w=majority`;
  mongoose.connect(dsn, (err) => {
    if (err) {
      return console.log("Could not connect to db", err);
    }
    console.log("Successfully connetcted to db");
  });
};

module.exports = {
  init,
};
