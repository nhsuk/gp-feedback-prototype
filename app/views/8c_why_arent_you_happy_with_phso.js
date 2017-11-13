module.exports = function(input, req) {
  switch (input.action) {
    case 'mistake':
      input.redirect = '/9a_ask_for_a_phso_review';
      break;
    case 'dont_agree':
      input.redirect = '/9b_ask_for_a_judicial_review';
      break;
  }

  return input;
}
