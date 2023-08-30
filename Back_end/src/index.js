const express = require("express");
const app = express();
const port = 5174;

app.listen(port, () => {
    console.log(`Running Express Server on Port: ${port}`)
})