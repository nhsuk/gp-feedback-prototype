module.exports = function (input, req) {
  input.reviews = req.app.locals.reviews;
  return input
}
