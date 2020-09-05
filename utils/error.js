class CustomError extends Error {
    constructor(message) {
        super();
        this.name = 'CustomError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }

    getCode() {
        if (this instanceof BadRequest) {
          return 400;
        } if (this instanceof NotFound) {
          return 404;
        }
        return 500;
    }
}

class BadRequest extends CustomError { }
class NotFound extends CustomError { }

module.exports = {
  CustomError,
  BadRequest,
  NotFound
};