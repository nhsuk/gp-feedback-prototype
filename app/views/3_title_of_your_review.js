module.exports = function (input, req) {
  if (req.method === 'POST') {
    req.session.validated = Object.assign({}, req.session.validated, {
      title: input.title,
    })

    input.redirect = '/4_when_did_this_happen';
  } else {
    input.title = req.session.validated.title;
  }
  return input
}
