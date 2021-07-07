const chai = require("chai")
const chaiHttp = require("chai-http")
const { describe } = require("mocha")

const server = require("../index")
chai.should()
chai.use(chaiHttp)
describe('TEST ALL USER API', () => {
    describe("GET / ALL USER ",()=>{
        it(" it should get all user data",(done)=>{
            chai.request(server)
            .get("/user")
            .end((err,response)=>{
                response.body.should.be.a("object")
                done();
            })
        })
    })
})
