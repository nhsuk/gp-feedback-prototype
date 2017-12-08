module.exports = function (input, req) {
  input.reviews = req.session.validated.reviews;
  return input
}
