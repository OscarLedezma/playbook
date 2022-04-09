class pokemon {
    constructor(name){
        this.name = name;
    }

    sayHello(message){
        //console.log('Mi pokemon{} te saluda', this.name);
        console.log(`Mi pokemon [${this.name}] te saluda!!!`);
    }

    sayMessage(message){
        //console.log('Mi pokemon [${this.name}] dice [${this.message}]');
        console.log(`Mi pokemon [${this.name}] te dice: ${message}`);
    }
}

module.exports = pokemon