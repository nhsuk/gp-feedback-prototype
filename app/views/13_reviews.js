module.exports = function (input, req) {
  input.reviews = [ 
    {
      monthOfVisit: 'October 2017',
      title: 'Outstanding service from reception through to pharmacy',
      userReview: 'Having had to use your services twice in one week your staff have been nothing but outstanding. The reception team were very reassuring, kind, helpful and considerate while your clinicians were equally also. Seen within hours of requesting a (non urgent) appointment. Can’t promote your service enough. Very grateful. Thank you.',
      gpResponse: 'Thank you very much for your lovely feedback.  We do try our best and really appreciate constructive comments of any kind. Our staff will be delighted to hear that they have made a difference. Thank you once again for taking the time and trouble to advise us.'
    },
    {
      monthOfVisit: 'May 2017',
      title: 'Appointment today',
      userReview: 'Female procedure. Both the Doctor performing the procedure and the attending nurse were so friendly, reassuring and professional. The nurse was kind and did their utmost to relax me, their attitude was exemplary and they are a credit to the practice. The doctor was, as always, excellent.',
      gpResponse: 'Thank you so much for your lovely comments. I\'m glad the clinical teamwork provided you with a great service and treatment. Both the GP and Nurse will really be delighted with this feedback.'
    }
  ];
  input.reviews.push({
    monthOfVisit: req.session.validated.monthOfVisit,
    title: req.session.validated.title,
    userReview: req.session.validated.userReview
  });
  return input
}
