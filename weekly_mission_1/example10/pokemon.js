export default class pokemon {
    constructor(name){
        this.name = name;
    }

    sayHello(message){
        //console.log('Mi pokemon{} te saluda', this.name);
        console.log(`Mi pokemon [${this.name}] te saluda!!!`);
    }
}

