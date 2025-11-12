import express from "express"
import dotenv from "dotenv";
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3")

dotenv.config();

const ObjectId = require("mongodb").ObjectId


const awsRoutes = express.Router();
// const s3Bucket = "natashalilyrosestorage"

const s3Client = new S3Client({
    region: "eu-west-2",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }

})

export const getObject = async(key) => {
    try {
        const params = {
            Bucket: process.env.AWS_S3_BUCKET, 
            Key: key,
        }

        const command = new GetObjectCommand(params);
        const data = await s3Client.send(command)

        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

export default awsRoutes