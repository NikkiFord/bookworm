import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import apiRouter from "./api";

const { PORT } = process.env;

const app = express();

app.use(express.static("./client"));
app.use(bodyParser.json());
app.use("/api", apiRouter);

app.get("*", (_, res) => res.sendFile(`${process.cwd()}/client/index.html`));

app.use((err, _, res, __) => {
  res
    .status(err.response?.status || 500)
    .send(err.response?.data || err.stack || err.toString());
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
