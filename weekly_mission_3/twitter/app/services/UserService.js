const User = require('./../models/User');

class UserService{
    constructor(id,username,name){
        this.id = id;
        this.username = username;
        this.name = name;
    }
    
    static create(id,username,name){
        return new User(id, username, name, "Sin bio");
    }
    static getInfo(user){
        return [user.id, user.username, user.name, "Sin bio"];
    }
    static updateUserUsername(user, newNombre){
            user.username = newNombre;
        return user;
    }
    static getAllUsernames(users){
    
        return [users[0].username,users[1].username,users[2].username];
    }
}

module.exports = UserService