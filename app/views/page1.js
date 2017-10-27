module.exports = function (input, req) {
  switch (input.action) {
    case 'complaint': 
      input.redirect = '/page2_1';
      break;
    case 'feedback':
      input.redirect = '/page2_2';
      break;
  }

  return input;
}
