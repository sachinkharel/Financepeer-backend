import express, { urlencoded } from "express";
import cors from "cors";
import upload from "express-fileupload";

import connectDB from "./dbConnection.js";
import bodyParser from "body-parser";
import File from "./schema.js";

const app = express();
app.use(cors());
app.use(urlencoded());
app.use(express.json());
app.use(upload());
app.post("/upload", (req, res) => {
  let data = JSON.parse(req.files.file.data);
  data.map((file) => File.create(file));
});

app.listen(5000);

connectDB();
