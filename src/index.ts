import { Request, Response, Express } from "express";

// create express app
const app:Express = require("express")();

const PORT = 3001;

app.get('/', (req:Request, res:Response) => {
    res.status(200).send("Hello");
})


app.listen(PORT, () => {
    console.log(`Server is running on portssss ${PORT}.`);
})