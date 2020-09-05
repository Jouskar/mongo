const {CustomError} = require('../utils/error');

const handleErrors = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message
  });
}

module.exports = handleErrors;