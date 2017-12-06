module.exports = function (input, req) {
  if (req.method === 'POST') {
    console.log(input);
    req.session.validated = Object.assign({}, req.session.validated, {
      screenName: input.checks ? 'Anonymous' : input.screenName
      })

    input.redirect = '/7_review_submitted'
  }

  return input
}
