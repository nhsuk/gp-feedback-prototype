module.exports = function (input, req) {
  input.reviews = [
    {
      displayname:'Anonymous',
      monthOfVisit: 'October 2017',
      title: 'Outstanding service from reception through to pharmacy',
      body: 'Having had to use your services twice in one week your staff have been nothing but outstanding. The reception team were very reassuring, kind, helpful and considerate while your clinicians were equally also. Seen within hours of requesting a (non urgent) appointment. Can’t promote your service enough. Very grateful. Thank you.',
      gpResponse: 'Thank you very much for your lovely feedback.  We do try our best and really appreciate constructive comments of any kind. Our staff will be delighted to hear that they have made a difference. Thank you once again for taking the time and trouble to advise us.'
    },
    {
      displayname:'Frank Hughes',
      monthOfVisit: 'April 2017',
      title: 'The most rude receptionist ever! Avoid',
      body: 'The receptionist at this surgery is probably the most disrespectful person on this earth. I have never felt so belittled after attempting to book an appointment with my doctor. I work and cannot attend on the day to wait for hours. The receptionist refused to book me an appointment and prevents me from seeing my GP. The only option is to go there in the morning and wait for a time slot. Refused access to my GP because of the disgraceful receptionist working there and even when you go there the reception ignores you for a good 10 minutes anyway. <br> <br /> Good doctors but seriously need to reconsider employing a receptionist with some level of humanity. Very disappointed with my treatment and have since changed practices. As this place is not a walk in centre to only be allowed to see a GP on the day, it’s a centre and appointments should be available.',
      gpResponse: 'Thank you for the comments you have made regarding our practice, we welcome constructive criticism. We are extremely disappointed that you are not happy with the service you received at our practice and feel the need to move practice. We can only apologise for any upset or inconvenience you may have encountered whilst contacting the practice. <br> <br /> Our reception staff have regular training updates and always try to be helpful and considerate to the needs of all our patients. Patients can book an appointment up to 4 weeks in advance. We also offer a book on the day service on Monday and Friday mornings. Emergency appointments and book on the day appointments are also available for the remainder of the week, together with advanced bookings. We are also able to offer appointments from 6.30pm midweek and at the weekend through the Extended Working Hours scheme. <br> <br /> As it is currently the holiday season, our GPs have been taking their annual holidays. Therefore, the practice employs locum GPs to ensure that we are able to continue to offer a safe and effective service for our patients. If you would like to discuss this matter further, please do not hesitate to contact the surgery.'
    },
    {
      displayname:'Anonymous',
      monthOfVisit: 'September 2017',
      title: 'Bad customer service',
      body: 'The reception and the people behind the calls and customer service are cold and impatient. They don\'t listen carefully and comes across as rude. I was saying something but the member of staff cut me off as if they are rushing to do something else.',

    },
    {
      displayname:'Linda',
      monthOfVisit: 'May 2017',
      title: 'Appointment today',
      body: 'Female procedure. Both the Doctor performing the procedure and the attending nurse were so friendly, reassuring and professional. The nurse was kind and did their utmost to relax me, their attitude was exemplary and they are a credit to the practice. The doctor was, as always, excellent.',
      gpResponse: 'Thank you so much for your lovely comments. I\'m glad the clinical teamwork provided you with a great service and treatment. Both the GP and Nurse will really be delighted with this feedback.'
    },
    {
      displayname:'Val Steele',
      monthOfVisit: 'May 2017',
      title: 'Second to None',
      body: 'We would like to thank everyone at this surgery for the excellent care given to our recently deceased uncle Ashton Sykes. Reception always tried to help him with his requests/demands for services. The GP\'s who visited him on every request at home, sometimes hours after the end of surgery, when most of us have been home for ages. The GP\'s always tried to include him in any decision regarding his complex health needs, particularly if the decision was to go into hospital or not. He was always treated with dignity, respect, compasion and empathy. <br> <br /> The District Nurses who came out to him at home over a long period of time. Many of us do not have a GP service of this calibre.',
    },
    {
      displayname:'Anonymous',
      monthOfVisit: 'May 2017',
      title: 'Surgery not fit for purpose-avoid',
      body: 'The reception staff are rude and unhelpful (feedback given to practice manager but as ever, nothing done about it). Appointment system is antiquated and totally patient unfriendly. For example, half the days in the week offer only "book in the day" appts...so join the chaos and try to dial in with everyone else at 8am. There are just four of these available. Rest are emergency. Despite being hospitalised with my complaint, after 2 days of trying this to get an appt, i have given up as they can offer me nothing that i can get to with childcare in place. Advance appointment refused. The GPs are largely locum, which says a lot.i had to make a formal complaint to the British Medical Association about one of their permanent GPs. I’m moving practices as soon as i can.',
    },
    {
      displayname:'Iman',
      monthOfVisit: 'April 2017',
      title: 'Brilliant',
      body: 'In all my experience the practice has been brilliant with me, getting appointments on time. It’s nice to have a doctors that are so friendly and make it easy to talk to about your problems, one of the best GP’s I’ve ever had.',
    },
    {
      displayname:'foxx',
      monthOfVisit: 'April 2017',
      title: 'So sad to have to leave',
      body: 'I’ve been a patient for about 8 years, due to moving out of the area I have to leave the practice and am devastated. I’ve only ever received first quality care and would recommend it to anyone. Yes there have been times when things haven’t been perfect but that’s hardly surprising given the pressure that I’m sure all doctors surgeries are under. What matters is that they get the main things right, it’s easy to make an appointment, the reception, doctors and nurses are all polite, courteous and really listen and try to help you. <br> <br /> The doctors always ensure your appointment is at the surgery location that suits you best. You always get a telephone consultation before a face to face appointment which I’m sure some people wouldn’t like but I’ve found this to be really helpful as you get to speak to a doctor about your issue and if they can help put your mind at ease or prescribe you medication without seeing you they will, they have also never denied me a face to face appointment when it was needed. If I didn’t have to leave here I wouldn’t, even with the greater distance to travel.',
      gpResponse: 'Thank you so much for your lovely feedback which we will be certain to share with everyon here. We are sorry to lose you but wish you all the very best in your new home and with your new surgery.'
    },
  ];
  input.reviews.unshift(req.session.validated);
  return input
}
