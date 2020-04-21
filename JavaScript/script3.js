//Facebook APP
var database = [
    {
        username: "d-money",
        password: "money"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "mel",
        password: "444"
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
    },
    {
        username: "jake",
        timeline: "daaamn"
    }
];

function isUserValid(username, password){
    for (var i=0; i < database.length; i++){
        if(database[i].username === username && 
            database[i].password === password) {
                return true;
        }
    }
    return false;
}

function signIn(username, password) {
//    console.log(isUserValid(username, password));
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else { 
        alert("Wrong info Bro!");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);

