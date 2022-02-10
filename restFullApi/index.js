const express = require("express")
const app = express()
const port = 3000
const routes = require('./routes')
// const db = require("./db/posts.json")
// app.get("/", (req, res) =>{
//     res.send("TERPANGGIL")
// })
// routes.get("/", (req, res) => {

// })
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(routes)

app.listen(port, ()=> {
    console.log(`I LOVE YOU ${port}`);
})