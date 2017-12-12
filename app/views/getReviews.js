const parser = require('xml2json');
const fs = require('fs');

module.exports = (function () {

  let xml = fs.readFileSync(`app/data/reviews-p1.xml`, "utf8");
  let json = parser.toJson(xml, { object: true });
  allComments = json.feed.entry;

  const reviews = allComments
    .filter(e => e.category.term === 'comment' && e.content.div)
    .map(e => { 
      return {
        id: e.id,
        title: e.title["$t"],
        displayname: e.author.name,
        body: Array.isArray(e.content.div) ? e.content.div[0]['$t'] : e.content.div['$t'],
        monthOfVisit: e.commentattribution['$t']
      }
  });

  const responses = allComments
    .filter(e => e.category.term === 'reply')
    .map(e => { 
      return {
        inReplyTo: e['in-reply-to'].ref,
        body: e.content['$t'],
        monthOfVisit: e.commentattribution['$t']
      }
  });

  return reviews.map(review => {
    const response = responses.find(response => response.inReplyTo === review.id);
    if (response) {
      review.response = response.body;
    };

    return review;
  });

  return reviews;
})();

