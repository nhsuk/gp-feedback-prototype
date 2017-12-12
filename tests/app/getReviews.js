const mocha = require('mocha');
const chai = require('chai');
const reviews = require('../../app/views/getReviews');

const expect = chai.expect;

describe('getReviews', () => {
  it('should get some reviews', () => {
    expect(reviews).to.have.lengthOf(13);
    expect(reviews).to.have.lengthOf(13);
  });
});

