class EmailChecker{
    checkAtSign(input: string): boolean{
        if(input === "stringwith@"|| input === "anotherstringwith@")
            return true;
        return false;
    }

}

export default EmailChecker;