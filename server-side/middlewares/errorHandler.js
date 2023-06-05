const errorHandler = (err, req, res, next) => {
    let message = "Internal server error";
    let code = 500;

    if (
        err.name === "SequelizeValidationError" ||
        err.name === "SequelizeUniqueConstraintError" ||
        err.name === "ValidationErrorItem"
    ) {
        message = err.errors[0].message;
        code = 400;
    }
    res.status(code).json({ message });
}

module.exports = errorHandler