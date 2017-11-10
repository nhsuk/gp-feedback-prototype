module.exports = function(input, req) {
  switch (input.action) {
    case 'gp':
      input.redirect = '/8a_contact_phso';
      break;
    case 'nhs-england':
      input.redirect = '/8b_contact_phso';
      break;
    case 'phso':
      input.redirect = '8c_why_arent_you_happy_with_phso';
      break;
    case 'gmc':
      input.redirect = '/10_we_cant_help_you';
      break;
    case 'nmc':
      input.redirect = '/10_we_cant_help_you';
      break;
    case 'none':
      input.redirect = '/10_we_cant_help_you';
      break;
  }

  return input;
}
