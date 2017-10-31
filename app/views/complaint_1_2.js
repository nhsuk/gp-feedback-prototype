module.exports = function(input, req) {
  switch (input.action) {
    case 'no':
      input.redirect = '/complaint_1_2_1';
      break;
    case 'gp':
      input.redirect = '/complaint_1_2_2';
      break;
    case 'nurse':
      input.redirect = '/complaint_1_2_3';
      break;
  }

  return input;
}
