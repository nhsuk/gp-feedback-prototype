module.exports = function(input, req) {
  switch (input.action) {
    case 'yes':
      input.redirect = '/15a_speak_to_your_gp';
      break;
    case 'no':
      input.redirect = '/15b_go_to_nhs_england';
      break;
  }

  return input;
}
