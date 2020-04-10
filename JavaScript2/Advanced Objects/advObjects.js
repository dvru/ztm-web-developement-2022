// reference type
var object1 = { value:10 };
var object2 = object1;
var object3 = { value:10 }
// object1 === object2
// true
// object1 === object3
// false
// object3 = object2
// {value: 10}
// object1 === object3
// true


// //context vs scope
const object4 = {
    a: function() {
        console.log(this);
    }
}
// instantiation
class Player {
    constructor(name, type){
        console.log('player',this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi ${this.name}, I\'m a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard',this);
    }
    play() {
        console.log(`I am ${this.type}`);
    }
}

const wizard1 = new Wizard('Bob', 'Healer');
const wizard2 = new Wizard('Mel', 'Magic');