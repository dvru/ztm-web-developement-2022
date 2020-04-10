function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter danger";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found river";
            break;
        case "left":
            whatHappens = "you run into fire";
            break;  
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}


// cleaner than else if
// if no cases work, then return default
// break is saying, break out of switch statement


// window.moveCommand("forward")
// "you encounter danger"
// window.moveCommand("back")
// "you arrived home"
// window.moveCommand("right")
// "you found river"
// window.moveCommand("left")
// "you run into fire"
// window.moveCommand("dasadsdad")
// "please enter a valid direction"