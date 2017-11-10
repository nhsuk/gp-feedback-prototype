module.exports = function(input, req) {
  if (!Array.isArray(input.action)) {
    console.log(input.action);
    switch (input.action) {
      case 'staff':
        input.redirect = '/4a_nhs_england';
        break;
      case 'public':
        input.redirect = '/4b_nhs_choices';
        break;
      case 'investigator':
        input.redirect = '/4c_cqc';
        break;
    }
  } else {
    if (input.action.length === 2) {
      if (input.action[0]=== 'staff' && input.action[1]=== 'public') {
        input.redirect = '/feedback_1_outcome_4';
      } else if (input.action[0]=== 'staff' && input.action[1]=== 'investigator') {
        input.redirect = '/feedback_1_outcome_5';
      } else if (input.action[0]=== 'public' && input.action[1]=== 'investigator') {
        input.redirect = '/feedback_1_outcome_6';
      }
    } else {
      // This section is for all options selected.
      input.redirect = '/feedback_1_outcome_7';
    }
  }

  return input;
}
