module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
        title: input.title,
        userReview: input.review
      })

    input.redirect = '/11_submit_your_review'
  }

  return input
}
