"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create express app
const app = require("express")();
const PORT = 3001;
app.get('/', (req, res) => {
    res.status(200).send("Hello fucking world");
});
app.listen(PORT, () => {
    console.log(`Server is running on portssss ${PORT}.`);
});
