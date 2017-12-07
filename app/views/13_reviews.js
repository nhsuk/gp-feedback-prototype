const reviews = require('./getReviews');

module.exports = function (input, req) {
  input.reviews = require('./getReviews');
  input.reviews.unshift(req.session.validated);
  return input
}
