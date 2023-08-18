import client from "../connection.js"
import express from "express"
var router = express.Router()


router.get("/", async (req, res) => {
    client.connect()
    var test = await client.db("Database_Blogs")
    var blogs = await test.collection("blog")
    var blogsItem = await blogs.find().toArray()

    res.json(blogsItem)
})


export default router