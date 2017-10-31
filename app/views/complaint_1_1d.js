module.exports = function(input, req) {
  switch (input.action) {
    case 'yes':
      input.redirect = '/complaint_1_1d_1';
      break;
    case 'no':
      input.redirect = '/complaint_1_1_1';
      break;
  }

  return input;
}
