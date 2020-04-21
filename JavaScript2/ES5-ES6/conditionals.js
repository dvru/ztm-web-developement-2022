//ternary operator 

// condition 
// ?  // if true
// expr1 // provide this
// :  // if false 
// expr2 // provide this 

// var automatedAnswer = 
// "Your account # is " + ( isUserValid(false) ? "1234" : "not available")


function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied"

function condition() {
    if (isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access denied"
    }
}

var answer2 = condition();

