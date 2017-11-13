module.exports = function(input, req) {
  switch (input.action) {
    case 'yes':
      input.redirect = '/12_gp_nurse_midwife';
      break;
    case 'no':
      input.redirect = '/14_can_you_talk_to_gp';
      break;
  }

  return input;
}
