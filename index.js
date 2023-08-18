import { config } from "dotenv";
import express, { json, urlencoded } from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import { MongoClient, ServerApiVersion } from "mongodb";

config();

const allowedOrigins = [
    "https://blogs-qusoh3e4k-toxic.vercel.app/"
];
const corsOptions = {
    origin: allowedOrigins,
};

const app = express();
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ limit: "500kb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "500kb", extended: false }));

const port = process.env.PORT || 4500

const uri = "mongodb+srv://TOXIC:TOXIC@cluster0.k6bz7qz.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})


app.get('/status', (req, res) => {
    res.send({ message: "Up and running" })
});

app.get('/', async (req, res) => {
    try {
        await client.connect();
        const database = client.db("test");
        const collection = database.collection("blogs");

        const query = {};
        const cursor = collection.find(query);

        const result = await cursor.toArray();
        if (result.length < 0) {
            res.status(404).send({ error: "Blogs not found" })
        } else {
            res.send(result)
        }
    } catch (error) {
        console.log("error");
    } finally {
        await client.close();
    }
})



app.listen(port, () => {
    console.log(`[server]: Hello Toxic I'm your fucking server running on http://localhost:${port}`)
})