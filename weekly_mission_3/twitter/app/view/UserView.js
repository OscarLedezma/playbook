const UserService = require('./../services/UserService');


class UserView{
    constructor(payload){
        this.id = payload.id;
        this.username = payload.username;
        this.name = payload.name;
    }

    static createUser(payload){

        if(payload == null){ 
            return {error: "Payload no existe"};
        }else if((typeof payload.id === "number") && (typeof payload.username === "string") && (typeof payload.name == "string"))
        {
            return new UserService(payload.id, payload.username, payload.name);
           
        }else{
            return {error: "necesitan tener un valor válido"};
        }
        
    }
}

module.exports = UserView