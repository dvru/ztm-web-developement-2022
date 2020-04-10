// scope

var b = "Can I access this?"

function bb() {
    b = "hello";
}

// Root Scope (window)
var fun = 5;

function funFunction() {
    //child scope
    var fun = "hellooo";
    console.log(1, fun);
}

function funerFunction() {
    //child scope
    var fun = "Byee";
    console.log(2, fun);
}

function funnestFunction() {
    //child scope
    fun = "Ahhhh";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funnestFunction();




// var b = "Can I access this?"

// function bb() {
//     var a = "hello";
// }
// undefined

// var b = "Can I access this?"

// function bb() {
//     var a = "hello";
//     console.log(b);
// }
// undefined

// bb()
// VM1180:5 Can I access this?