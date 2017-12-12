module.exports = function (input, req) {
  input.review = {
    title: req.session.validated.title,
    body: req.session.validated.body,
    monthOfVisit: `${req.session.validated.visitMonth}/${req.session.validated.visitYear}`,
    displayname: req.session.validated.displayname,
    emailAddress: req.session.validated.emailAddress
  };

  req.session.validated = Object.assign({}, req.session.validated, {
    returnToOverview: true 
  })

  return input;
}
