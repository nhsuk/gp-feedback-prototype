module.exports = function(input, req) {
  if (req.method === 'POST') {
    switch (input.action) {
      case 'yes':
        input.redirect = '/6_what_is_your_name';
        break;
      case 'no':
        req.session.validated = Object.assign({}, req.session.validated, {
          displayname: 'Anonymous'
        });
        input.redirect = '7_what_is_your_email_address';
        break;
    }
  }

  return input;
}
