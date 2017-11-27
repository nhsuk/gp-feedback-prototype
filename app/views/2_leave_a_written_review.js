module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
        title: input.title,
        userReview: input.review
      })

    input.redirect = '/10_when_did_this_happen'
  }

  return input
}
