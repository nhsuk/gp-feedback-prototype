module.exports = function (input, req) {
  input.reviews = req.app.locals.reviews;
  input.reviews.unshift(req.session.validated);
  return input
}
