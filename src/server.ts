import express from "express";
import endpoint from '../endpoints.config';

const app = express();

// app.method("resource: route", (request, response))

app.get("/", (request, response) => {
    return response.json({message: "Hello World!"});
});

app.post("/", (request, response) => {
    // some code here - just for test
    return response.json({message: "Method post is working!"});
});

app.listen(endpoint.PORT, () => {
    console.log(`Server running on port ${endpoint.PORT}! ✔`);
});