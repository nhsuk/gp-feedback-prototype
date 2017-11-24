module.exports = function (input, req) {
  switch (input.action) {
    case 'yes':
      input.redirect = '/4_rate_the_surgery';
      break;
    case 'no':
      input.redirect = '/10_when_did_this_happen';
      break;
  }

  return input;
}
