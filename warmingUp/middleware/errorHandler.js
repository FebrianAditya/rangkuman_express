
function errorHandler(err, req, res, next ) {
    console.log(err, "==> ERROR");
    res.status(500).json({
        status: "USER",
        errors: err.message
    })
}

module.exports = errorHandler