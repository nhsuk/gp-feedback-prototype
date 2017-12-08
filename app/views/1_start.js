const reviews = require('./getReviews');

module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
      reviews: reviews
    })

    input.redirect = '2_write_your_review_v1';
  }
  return input
}

