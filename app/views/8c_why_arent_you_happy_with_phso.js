module.exports = function(input, req) {
  switch (input.action) {
    case 'mistake':
      input.redirect = '/9a_';
      break;
    case 'dont_agree':
      input.redirect = '/9b_';
      break;
  }

  return input;
}
