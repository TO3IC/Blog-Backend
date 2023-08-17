require("dotenv").config()
const client = require('./connection');
const testDB = client.db("test")
const blogs = testDB.collection("blogs")
const express = require('express');
const blog = require('./routes/blog');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ origin: "https://blogs-qusoh3e4k-toxic.vercel.app/" }));

app.use("/blogs", blog)

module.exports = {
    testDB,
    blogs
}

app.listen(4000)
