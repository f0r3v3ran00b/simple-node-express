const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('GET /', function () {
    it('Returns a hello message', function (done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});