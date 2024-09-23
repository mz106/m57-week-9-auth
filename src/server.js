require("dotenv").config();
const express = require("express");

const User = require("./users/model");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const syncTables = () => {
  User.sync();
};

app.use("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`Server is listening on port ${port}`);
});
