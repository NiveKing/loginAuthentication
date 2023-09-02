const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const port = 5174;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users"
})

app.listen(port, () => {
    console.log(`Running Express Server on Port: ${port}`)
})


app.post("/register", (req,res)=>{
    const check = "SELECT * FROM logins WHERE `username`= ?";
    const values = [
        req.body.username,
        req.body.password
    ]
    db.query(check,values[0], (error, data) => {
        if (error) {
            return res.json("Error")
        }
        if (data.length > 0) {
            return res.json("Failed");
        } else {
            const sql = "INSERT INTO logins (`username`, `password`) VALUES (?)"
            db.query(sql,[values], (error, data) => {
                if (error) {
                    return res.json("Error");
                } 
                return res.json(data)
            })
        }
    })
})

app.post("/login", (req,res)=>{
    const sql = "SELECT * FROM logins WHERE `username`= ? AND `password` = ?";
    const values = [
        req.body.username,
        req.body.password
    ]
    db.query(sql,values, (error, data) => {
        if (error) {
            return res.json("Error")
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    })
})