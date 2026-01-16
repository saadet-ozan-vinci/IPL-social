import EmailChecker from "./emailChecker";

describe("EmailChecker", () => {
    let emailChecker = new EmailChecker();
    
    describe("checkAtSign()", () => {
        it("should return false when given string without @", () => {
            let result = emailChecker.checkAtSign("noatsign");
            expect(result).toBe(false);
        }); 
        it("should return true when given string = stringwith@", ()=>{
            let result =emailChecker.checkAtSign("stringwith@");
            expect(result).toBe(true);
        })
        it("should return true when given anotherstringwith@", ()=>{
            let result = emailChecker.checkAtSign("anotherstringwith@");
            expect(result).toBe(true);
        })
    });

    describe("checkPointSignInDomain()", ()=>{
        it("should return false when given nopointsign@domain", ()=>{
            let result = emailChecker.checkPointSignInDomain("nopointsign@domain");
            expect(result).toBe(false);
        });
        it("should return true when given pointname@in.domain", ()=>{
            let result = emailChecker.checkPointSignInDomain("pointname@in.domain");
            expect(result).toBe(true);
        })
        it("should return false when given pointname@indomainlast.", ()=>{
            let result = emailChecker.checkPointSignInDomain("pointname@indomainlast.");
            expect(result).toBe(false);
        })
        it("should return false when given point.not@indomain", ()=>{
                        let result = emailChecker.checkPointSignInDomain("point.not@indomain");
            expect(result).toBe(false);
        })
        it("should return true when given point.in@domain.name", ()=>{
            let result = emailChecker.checkPointSignInDomain("point.in@domain.name");
            expect(result).toBe(true);})
        
    })
    describe("checkSpace()", ()=>{
        it("should return true when given nospaces", ()=>{
            let result = emailChecker.checkSpace("nospaces");
            expect(result).toBe(true);
        })
        it("should return false when given'with space'", ()=>{
            let result=  emailChecker.checkSpace("with space");
            expect(result).toBe(false)
        })
    })
});