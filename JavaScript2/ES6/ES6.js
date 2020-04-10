// let + const 
//const stands for constant

const gamePlayer = "bobby";
let experience = 100;
let Level = false;

if (experience > 90) {
    let Level = true;
    console.log('inside', Level);
}

console.log('outside', Level);