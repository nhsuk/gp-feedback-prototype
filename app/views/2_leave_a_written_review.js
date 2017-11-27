module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
        title: input.title,
        userReview: input.review
      })

    input.redirect = '/3_would_you_like_to_rate_the_surgery'
  }

  return input
}
