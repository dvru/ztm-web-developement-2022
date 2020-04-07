//Facebook APP

var database = [
    {
        username: "d-money",
        password: "money"
    }
];

var newsFeed = [
    {
        username: "Bob",
        timeline: "Hi, hello"
    },
    {
        username: "Sally",
        timeline: "Oh girl"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
            console.log(newsFeed);
    } else { 
        alert("Wrong info Bro!");
    }
}

signIn(userNamePrompt, passwordPrompt);