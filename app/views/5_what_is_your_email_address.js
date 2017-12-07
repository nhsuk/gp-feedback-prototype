module.exports = function (input, req) {
  if (req.method === 'POST') {
    console.log(input);
    req.session.validated = Object.assign({}, req.session.validated, {
      emailAddress: input.emailAddress
      })

    input.redirect = '/6_check_your_review'
  }

  return input
}
