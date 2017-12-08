module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
        visitMonth: input.visitMonth,
        visitYear: input.visitYear,
      })

    input.redirect = '/4_what_is_your_name'
  } else {
    input.visitMonth = req.session.validated.visitMonth;
    input.visitYear = req.session.validated.visitYear;
  }

  return input
}
