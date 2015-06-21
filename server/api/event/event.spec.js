var should = require('should');
var app = require('../../server');
var request = require('supertest');

describe('GET api/events', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/events')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if(err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('POST api/events', function() {
  it('should respond with a 201', function(done) {
    var event = {
      "title": "Business Meeting",
      "from":"2015-07-15T20:20:00.000Z",
      "to":"2015-08-02T09:03:00.000Z",
      "location":"Los Angeles, CA",
      "description":"This is an event description",
      "participants":["Steve Businessman","John Smith", "George Moneyman"]
    };

    request(app)
      .post('/api/events')
      .send(event)
      .end(function(err, res) {
        if(err) return done(err);
        res.status.should.be.equal(201);
        done();
      });
  });
});
