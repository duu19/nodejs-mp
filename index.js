const express = require("express");
const connectToDatabase = require("./src/database/database");

const app = express();

const port = 3021;

app.use(express.json());

connectToDatabase();

app.get("/", (req, res) => {
    res.send({
        message: "Seja bem vindo ao nosso e-commerce!"
    });
})

app.listen(port, () => {
    console.log(`server on: http://localhost:${port}`);
})