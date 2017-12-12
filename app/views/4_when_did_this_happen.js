module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
        visitMonth: input.visitMonth,
        visitYear: input.visitYear,
      })

    input.redirect = req.session.validated.returnToOverview ? '8_check_your_review' : '/2_write_your_review_v1' ;
  } else {
    input.visitMonth = req.session.validated.visitMonth;
    input.visitYear = req.session.validated.visitYear;
  }

  return input
}
