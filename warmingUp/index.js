const express = require("express")
const cookieParser = require("cookie-parser")
const routes = require("./routes")
const errorHandler = require("./middleware/errorHandler")
const app = express()
const port = 3000

app.set("view engine", "ejs") // cara memanggil EJS nya

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())
app.use(routes)
// app.use((err, req, res, next) => {
//     res.status(404).json({
//         status: "fail",
//         errors: "are you lost?"
//     })
// })
app.use(errorHandler)

app.listen(port, () => {
    console.log(`I Love You ${port}`);
})