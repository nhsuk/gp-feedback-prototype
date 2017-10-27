module.exports = function (input, req) {
  switch (input.action) {
    case 'no':
      input.redirect = '/complaint_1_1_1';
      break;
    case 'doctor':
      input.redirect = '/complaint_1_1_2';
      break;
    case 'nurse':
      input.redirect = '/complaint_1_1_3';
      break;
  }

  return input;
}
