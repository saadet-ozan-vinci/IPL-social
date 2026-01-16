class EmailChecker{
    checkAtSign(input: string): boolean{
        if(input.includes("@"))
            return true;
        return false;
    }

    

}

export default EmailChecker;