module.exports = function (input, req) {
  if (req.method === 'POST') {
    console.log(input);
    req.session.validated = Object.assign({}, req.session.validated, {
      screenName: input.checks ? 'Anonymous' : input.screenName
      })

    input.redirect = '/5_what_is_your_email_address'
  }

  return input
}
