module.exports = function (input, req) {
  input.review = {
    title: req.session.validated.title,
    body: req.session.validated.body,
    monthOfVisit: req.session.validated.monthOfVisit,
    displayname: req.session.validated.displayname,
    emailAddress: req.session.validated.emailAddress
  };

  return input;
}
