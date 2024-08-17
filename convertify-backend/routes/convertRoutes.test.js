const request = require('supertest');
const app = require('../index'); // Adjust path if necessary
const { expect } = require('chai');

describe('POST /convert/length', () => {
  it('should convert length correctly', (done) => {
    request(app)
      .post('/convert/length')
      .send({ fromUnit: 'meter', toUnit: 'kilometer', value: 1000 })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.result).to.equal(1);
        done();
      });
  });
});
