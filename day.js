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

//functions
const myName = "Gotuu.";
const myAge = 21;
function introduction() {
    console.log(`Hi, My name is ${myName} and I am ${myAge} years old.`);

}
introduction()
introduction(myName, myAge)


// arrow function
const arrowFun = () => {
    console.log("____----____");
    console.log("hello There, this is me");
};
const arrowFun1 = () => console.log("hello here,!");
const arrowFun2 = (name) => `hello there ${name}`;
const arrowFun3 = (a, b) => a * b;

console.log(arrowFun2("nishan"));
console.log(arrowFun3(6, 3));



//desctructing (extrawcting values esaily)

const person = { names: "nishan", ages: 100 };
const { names, ages } = person;
console.log(person.names, person.ages);

const animals = ["dog", "cat", "cow"];
const [frist, second, third] = animals;
console.log(frist, second, third);
console.log(animals[2]);

//spread('...') operators
const moreDetailsPEson = { ...person, address: "laxmimarga" };
console.log(moreDetailsPEson);