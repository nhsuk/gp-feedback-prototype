module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
      body: input.body
    })

    input.redirect = req.session.validated.returnToOverview ? '8_check_your_review' : '/3_title_of_your_review' ;
  } else {
    input.body = req.session.validated.body;
  }
  return input
}
