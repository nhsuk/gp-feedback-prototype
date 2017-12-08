module.exports = function(input, req) {
  switch (input.action) {
    case 'yes':
      input.redirect = '/6_what_is_your_name';
      break;
    case 'no':
      input.redirect = '7_what_is_your_email_address';
      break;
  }

  return input;
}
