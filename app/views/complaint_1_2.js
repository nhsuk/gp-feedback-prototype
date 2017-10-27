module.exports = function (input, req) {
  switch (input.action) {
    case 'nmc':
      input.redirect = '/complaint_1_2_1';
      break;
    case 'gmc':
      input.redirect = '/complaint_1_2_2';
      break;
    case 'phso':
      input.redirect = '/complaint_1_2_2';
      break;
    case 'nhs-england':
      input.redirect = '/complaint_1_2_1';
      break;
    case 'gp-surgery':
      input.redirect = '/complaint_1_2_1';
      break;
  }

  return input;
}
