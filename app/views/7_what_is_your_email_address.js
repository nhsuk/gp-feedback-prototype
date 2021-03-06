module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
      emailAddress: input.emailAddress,
      emailAddress2: input.emailAddress2
      })

    input.redirect = '/8_check_your_review'
  } else {
    input.emailAddress = req.session.validated.emailAddress;
    input.emailAddress2 = req.session.validated.emailAddress2;
  }

  return input
}
