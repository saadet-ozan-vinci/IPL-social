class EmailChecker{
    checkAtSign(input: string): boolean{
        if(input.includes("@"))
            return true;
        return false;
    }

    checkPointSignInDomain(input :string) : boolean{
        return false;
    }
    

}

export default EmailChecker;