import express from "express";
import connectDB from "./database/connection.js";
import authRouter from "./src/routes/auth.route.js";
import userRouter from "./src/routes/user.route.js";

import "dotenv/config";
import { errorHandling } from "./src/utils/errorHandling.js";

const app = express();
const port = 3000;

app.use(express.json({}));

app.use("/", authRouter);
app.use("/user", userRouter);

app.use("*", (req, res, next) => {
  return next(new Error("404 page not found", { cause: 404 }));
});
app.use(errorHandling);

connectDB();

app.listen(port, () =>
  console.log(`server is  listening on port.......... ${port}!`)
);
