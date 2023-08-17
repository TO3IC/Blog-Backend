const express = require('express');
const client = require('../connection');
const testDB = client.db("test")
const blogs = testDB.collection("blogs")
const router = express.Router();

router.get("/", async (req, res) => {
    res.json(await blogs.find().toArray())
})

module.exports = router