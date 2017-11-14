module.exports = function (input, req) {
  switch (input.action) {
    case 'feedback':
      input.redirect = '/3_who_should_see_this';
      break;
    case 'complaint':
      input.redirect = '/5_complained_before';
      break;
  }

  return input;
}
