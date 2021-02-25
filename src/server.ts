import "reflect-metadata";
import express from "express";
import endpoint from '../endpoints.config';
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(endpoint.PORT, () => {
    console.log(`Server running on port ${endpoint.PORT}! ✔`);
});