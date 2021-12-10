const { expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const kontrolbruger = require('./../source/kontrolcenter/kontrolbruger');

chai.use(chaiHttp);

describe('API', () => {
    describe('POST/lav', () => {
        it('should return an array', (done) => {
             chai
             .request(kontrolbruger)
             .post('/lav')
             .end((err, res) => {
                expect(err).to.be.null;
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.equal(4);

                done();
             });
        });
    });
});
