import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server started on port : ${port}`));
