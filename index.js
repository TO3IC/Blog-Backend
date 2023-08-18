import { config } from "dotenv";
import express, { json, urlencoded } from 'express';
import client from "./connection.js";
import bodyParser from "body-parser";
import cors from 'cors';
import { MongoClient, ServerApiVersion } from "mongodb";
import router from "./routes/blog.js";

config();

const allowedOrigins = [
    "https://blogs-qusoh3e4k-toxic.vercel.app/"
];
const corsOptions = {
    origin: allowedOrigins,
};

const port = process.env.PORT || 4500
const uri = process.env.APIKEY
const app = express();

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ limit: "500kb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "500kb", extended: false }));


app.use("/api/blogs",router)

app.get('/', async (req, res) => {
    res.end("Use /api/blogs")
})



app.listen(port, () => {
    console.log(`[server]: Hello Toxic, I'm your server running on http://localhost:${port}`)
})