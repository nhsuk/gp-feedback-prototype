module.exports = function(input, req) {
  switch (input.action) {
    case 'gp':
      input.redirect = '/13a_go_to_gmc';
      break;
    case 'nurse':
      input.redirect = '/13b_go_to_nmc';
      break;
    case 'midwife':
      input.redirect = '/13c_go_to_nmc';
      break;
  }

  return input;
}
