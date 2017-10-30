module.exports = function(input, req) {
  if (!Array.isArray(input.action)) {
    console.log(input.action);
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
  } else {
    if (input.action.length === 2) {
      if (input.action[0]=== 'staff' && input.action[1]=== 'public') {
        input.redirect = '/feedback_1_4';
      } else if (input.action[0]=== 'staff' && input.action[1]=== 'investigator') {
        input.redirect = '/feedback_1_5';
      } else if (input.action[0]=== 'public' && input.action[1]=== 'investigator') {
        input.redirect = '/feedback_1_6';
      }
    } else {
      // This section is for all options selected.
      input.redirect = '/feedback_1_7';
    }
  }

  return input;
}
