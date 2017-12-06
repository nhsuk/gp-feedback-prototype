module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
        monthOfVisit: input.monthOfVisit
      })

    input.redirect = '/4_what_is_your_name'
  }

  return input
}
