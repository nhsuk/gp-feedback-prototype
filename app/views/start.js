module.exports = function (input, req) {
  switch (input.action) {
    case 'complaint':
      input.redirect = '/complaint_1';
      break;
    case 'feedback':
      input.redirect = '/feedback_1';
      break;
    case 'help':
      input.redirect = '/help_1';
      break;
  }

  return input;
}
