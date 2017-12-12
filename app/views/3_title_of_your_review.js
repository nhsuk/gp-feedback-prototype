module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
      title: input.title,
    })

    input.redirect = req.session.validated.returnToOverview ? '8_check_your_review' : '/5_do_you_want_to_write_your_name' ;
  } else {
    input.title = req.session.validated.title;
  }
  return input
}
