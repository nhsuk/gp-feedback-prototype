module.exports = function(input, req) {
  switch (input.action) {
    case 'gp':
      input.redirect = '/complaint_1_1a';
      break;
    case 'nhs-england':
      input.redirect = '/complaint_1_1b';
      break;
    case 'phso':
      input.redirect = '/complaint_1_1c';
      break;
    case 'gmc':
      input.redirect = '/complaint_1_1d';
      break;
    case 'nmc':
      input.redirect = '/complaint_1_1e';
      break;
    case 'no':
      input.redirect = '/complaint_1_2';
      break;
  }

  return input;
}
