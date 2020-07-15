//var example
var named = "hey hi from outside";
    var friend = 4;

    if (friend > 3) {
        var named = "say Hello from inside"; 
    }
    
    console.log(named); //say Hello from inside

//let example
let mee = "say Hi outside";
    if (true) {
        let mee = "say Hello instead from inside";
        console.log(mee); // "say Hello instead from inside"
    }
    console.log(mee); // "say Hi outside"
    
//const example    
const value="10";
console.log(value);