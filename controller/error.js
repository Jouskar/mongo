module.exports = class CustomError extends Error {
    constructor(message, status) {
        super();
        this.name = 'CustomError';
        this.message = message;
        this.status = status ? status : 400;
        Error.captureStackTrace(this, this.constructor);
    }
}