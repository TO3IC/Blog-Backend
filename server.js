const dotenv = require("dotenv");
const client = require('./connection');
const testDB = client.db("test")
const blogs = testDB.collection("blogs")
const express = require('express');
const blog = require('./routes/blog');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
app.use(cors({ origin: "https://blogs-qusoh3e4k-toxic.vercel.app/" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const app = express();


app.use("/blogs", blog)

app.get('/status', (req, res) => {
   res.send({message: "Up and running"}) 
});
module.exports = {
    testDB,
    blogs
}

app.listen(4000)
