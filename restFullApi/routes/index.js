const express = require("express")
const route = express.Router()
const notificationRoute = require("./notificationRoute")
const userRoute = require("./userRoute")
const apiRoute = require("./apiRoute")

route.get("/", (req, res) => {
    res.send("HOME")
})

route.use("/user", userRoute)
route.use("/notification", notificationRoute)
route.use("/api", apiRoute)

module.exports = route