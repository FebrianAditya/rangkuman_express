const route = require("express").Router()
const UserController = require("../controllers/userController")

route.get("/login", UserController.userLogin)
// route.get("/login", (req, res) => {

// })
route.get("/testerror", UserController.testError)
route.get("/home", UserController.home)
route.get("/ejs", UserController.testingEjs)

route.get("/loginpage", UserController.renderLoginPage)


module.exports = route