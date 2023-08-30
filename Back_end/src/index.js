const express = require("express");
const app = express();
const port = 5174;

app.use(express.json());

app.listen(port, () => {
    console.log(`Running Express Server on Port: ${port}`)
})

const lists = [
    {
        name: "kevin"
    }
]

app.get("/list", (req,res)=>{
    res.send(lists);
})

app.post("/list", (req,res)=>{
    lists.push(req.body);
    res.send(lists);
})