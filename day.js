const name = 'nishan';
console.log(name);

// name = "mohit"
// console.log(name);

let college = "namuna";

console.log(college);

let isAdmin = true;
if (isAdmin == false) {
    console.log("you are logged in");
}
else {
    console.log("wrong credintaials");
}

console.log("Types: " + typeof isAdmin);

let isObj = { firstname: "nishan", lastname: "pradhan" };

console.log("Types: " + typeof isObj);

let isArray = [1, "hello Meow"];
console.log(typeof isArray)


let isArrayD = [1, 2];
console.log(typeof isArrayD);

console.log(`
        /\\_/\\  
       ( o.o )  
        > ^ <
   Doraemon says MEOW!
`);



const age = 20;

if (age <= 13) {
    console.log("you are child ");

}
else if (age >= 13 && age <= 17) {
    console.log("you are teenager");
} else {
    console.log("you are mature");
}

function greet() {
    console.log("✨✨✨ Learning the react hahaha 😆😆😆");
}

greet();
const userName = "Nishan Pradhan😏";

function userData(userName = "Guest User") {
    console.log(`Hello!, ${userName}`);
    console.log("Hello!, " + userName);
}

userData(userName);


const myName = "Gotuu.";
const myAge = 21;
function introduction() {
    console.log(`Hi, My name is ${myName} and I am ${myAge} years old.`);

}
introduction()
introduction(myName, myAge)
