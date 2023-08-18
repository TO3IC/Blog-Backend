import { config } from "dotenv";
import express, { json, urlencoded } from 'express';
import { MongoClient, ServerApiVersion } from "mongodb";

config()

const uri = process.env.APIKEY
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})


export default client