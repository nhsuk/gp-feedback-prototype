module.exports = function(input, req) {
  switch (input.action) {
    case 'yes':
      input.redirect = '/6_response_recieved';
      break;
    case 'no':
      input.redirect = '/11_risk_to_patients';
      break;
  }

  return input;
}
