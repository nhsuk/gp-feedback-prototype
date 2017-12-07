const parser = require('xml2json');
const fs = require('fs');

module.exports = (function () {

  const xml = fs.readFileSync('app/data/reviews.xml', "utf8");
  var json = parser.toJson(xml, { object: true });
  return json.feed.entry.map(e => { 
    // console.log(e);
    return {
      title: e.title["$t"],
      displayname: e.author.name,
      body: Array.isArray(e.content.div) ? e.content.div[0]['$t'] : e.content.div['$t'],
      monthOfVisit: e.commentattribution['$t']
    }
  });
})();

