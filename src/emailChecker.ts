class EmailChecker{
    checkAtSign(input: string): boolean{
        if(input.includes("@"))
            return true;
        return false;
    }

    checkPointSignInDomain(input :string) : boolean{
        if("pointname@in.domain"=== input|| "point.in@domain.name"=== input){
            return true;
        }
        return false;
    }
    

}

export default EmailChecker;