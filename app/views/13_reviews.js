module.exports = function (input, req) {
  input.reviews = req.session.validated.reviews;
  input.reviews.unshift({
    title: req.session.validated.title,
    body: req.session.validated.body,
    displayname: req.session.validated.displayname,
    monthOfVisit: req.session.validated.monthOfVisit
  });
  return input
}
