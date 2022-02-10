
class UserController {


    static userLogin(req, res, next) {
        res.send("USER LOGIN")
    }

    static testingEjs(req, res) {
        res.render("index")
    }

    static home(req, res) {
        res.render("home")
    }

    static testError(req, res, next) {
        ErrorTest
            .then((result) => {
                res.send("HAHAHA")
            }).catch((err) => {
                next(err)
            });
    }

    static renderLoginPage(req, res) {
        res.render("loginPage")
    }

}

module.exports = UserController