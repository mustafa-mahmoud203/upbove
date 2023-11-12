import express from "express";
import connectDB from "./database/connection.js";
const app = express();
const port = 3000;

connectDB();
app.listen(port, () =>
  console.log(`server is  listening on port.......... ${port}!`)
);
