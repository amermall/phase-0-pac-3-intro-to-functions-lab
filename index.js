function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

// takes a string argument and logs it in all caps using console.log()
function logShout(string) {
    console.log(string.toUpperCase());
}
logShout("dogobah");


// takes a string argument and logs it in all lowercase using console.log()
function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("James1:2");


// ReferenceError: sayHiToGrandma is not defined
function sayHiToGrandma(string) {
    
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!"
    } else if (string === "I love you, Grandma.") {
        return "I love you, too."
    }
}