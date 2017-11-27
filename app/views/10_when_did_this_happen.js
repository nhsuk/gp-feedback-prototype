module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
        monthOfVisit: input.monthOfVisit
      })

    input.redirect = '/11_submit_your_review'
  }

  return input
}
