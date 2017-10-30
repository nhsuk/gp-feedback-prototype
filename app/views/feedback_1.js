module.exports = function (input, req) {
  switch (input.action) {
    case 'staff':
      input.redirect = '/feedback_1_1';
      break;
    case 'public':
      input.redirect = '/feedback_1_2';
      break;
    case 'investigator':
      input.redirect = '/feedback_1_3';
      break;
  }

  return input;
}
