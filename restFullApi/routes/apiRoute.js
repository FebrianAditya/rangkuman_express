const express = require('express').Router()
const db = require("../db/posts.json")
// const db2 = 

express.get("/post", (req, res) => {
    // res.send("masuk post")
    res.status(200).json(db)
})

express.post("/post/:idx", (req, res) => {
    // console.log(typeof req.params.idx, "===> INI APA YAA");
    const post = db.find(i => i.id === +req.params.idx)
    res.status(200).json(post)
    // res.send("masuk post merthode post") 
})

express.post("/post", (req, res) => {
    const {title, body} = req.body
    const result = {
        title,
        body
    }
    console.log(result, "==> INI INPUT DARI USER");
    
    const id = db[db.length -1].id + 1

    const post = {
        id, title, body
    }
    db.push(post)
    console.log(db, "==> INI DATABASE NYA YAA BROOOO");

    res.status(201).json(db)
})

module.exports = express