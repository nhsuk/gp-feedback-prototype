module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
      body: input.body
    })

    input.redirect = '/3_title_of_your_review';
  } else {
    input.body = req.session.validated.body;
  }
  return input
}
