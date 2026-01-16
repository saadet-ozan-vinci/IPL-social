import EmailChecker from "./emailChecker";

describe("EmailChecker", () => {
    let emailChecker = new EmailChecker();
    
    describe("checkAtSign()", () => {
        // ADDED: () => { ... } wrapper around the logic
        it("should return false when given string without @", () => {
            let result = emailChecker.checkAtSign("noatsign");
            expect(result).toBe(false);
        }); 
        it("should return true when given string = stringwith@", ()=>{
            let result =emailChecker.checkAtSign("stringwith@");
            expect(result).toBe(true);
        })
    });
});