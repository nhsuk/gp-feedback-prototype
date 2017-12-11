const reviews = require('./getReviews');

module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = {};
    req.session.validated = Object.assign({}, req.session.validated, {
      reviews: reviews
    })

    input.redirect = '4_when_did_this_happen';
  }
  return input
}
