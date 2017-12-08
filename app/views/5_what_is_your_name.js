module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
      displayname: input.anonymous ? 'Anonymous' : input.displayname
      })

    input.redirect = '/6_what_is_your_email_address'
  } else {
    input.displayname = req.session.validated.displayname;
  }

  return input
}
