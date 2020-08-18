
export class LoginPage{

    name;
    password;
   
    constructor(name,password){
        this.name = name;
        this.password = password;
    }

     name;
     password;

    getUser(){
        return this.name+' '+this.password;
    }
}