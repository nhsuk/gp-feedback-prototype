module.exports = function(input, req) {
  switch (input.action) {
    case 'yes':
      input.redirect = '/7a_who_did_you_complain_to';
      break;
    case 'no':
      input.redirect = '/10_we_cant_help_you';
      break;
  }

  return input;
}
