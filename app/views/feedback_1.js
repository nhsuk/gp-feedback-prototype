module.exports = function (input, req) {
  switch (input.action) {
    case 'address-my-issue':
      input.redirect = '/feedback_1_1';
      break;
    case 'influence-others':
      input.redirect = '/feedback_1_2';
      break;
    case 'improve-services':
      input.redirect = '/feedback_1_3';
      break;
    case 'nhs-investigate':
      input.redirect = '/feedback_1_4';
      break;
    case 'say-something-positive':
      input.redirect = '/feedback_1_3';
      break;

  }

  return input;
}
