const { stack } = require("../routes/contactRoutes");
const { constants } = require("../constants");

const errorHandler = (err,req,res,next) => {
    const statuscode = res.statuscode ? res.statuscode : 500;
    switch (statuscode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "validation Failed",
                message: err.message,
                stackTrace: stack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized access",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log("No error detected, seems good!");
            break;
    }
};

module.exports = errorHandler;