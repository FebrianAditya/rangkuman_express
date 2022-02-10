const route = require("express").Router()
const userRoute = require('./userRoute')


route.get('/', function (req, res) {
    res.send("HOME")
})

route.use("/user", userRoute)

module.exports = route