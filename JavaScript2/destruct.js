// Destructing

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const { player, experience } = obj;
let { wizardLevel } = obj;

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;


const name = 'john snow';

const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hibye'
}