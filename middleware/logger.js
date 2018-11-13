/* eslint-disable strict */
const logger = function (request, response, next) {
  const now = new Date ();
  console.log(`Request method is ${request.method}. URL is ${request.url}`);
  next();
};

module.exports = logger;