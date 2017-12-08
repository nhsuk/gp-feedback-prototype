module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
        title: input.title,
        userReview: input.review
      })

    input.redirect = '/3_title_of_your_review'
  } else {
    req.session.validated = Object.assign({}, req.session.validated, {
        surgeryName: req.query.surgeryName
      })
  }

  return input
}
