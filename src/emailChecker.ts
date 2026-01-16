class EmailChecker{
    checkAtSign(input: string): boolean{
        if(input.includes("@"))
            return true;
        return false;
    }

    checkPointSignInDomain(input :string) : boolean{
        let domainName : string= input.split("@")[1];
        console.log(domainName);
        if(domainName[domainName.length-1] ==="."){
            return false;
        }
        if(domainName.includes(".")){
            return true;
        }
        return false;
    }

    checkSpace(input:string):boolean{
        return true;
    }

    
    

}

export default EmailChecker;