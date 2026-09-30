
let fullName = "June Kwamboka Aming'a";
const age = 20;
var enrolled = true;

console.log(fullName);
console.log(typeof fullName);

console.log(age);
console.log(typeof age);

console.log(enrolled);
console.log(typeof enrolled);


let numberString = "5";
let number = 10;

console.log(numberString + number);
console.log(numberString * number);


let ticketAge = 20;

if (ticketAge < 5) {
    console.log("Free");
} else if (ticketAge >= 5 && ticketAge <= 17) {
    console.log("Child discount");
} else if (ticketAge >= 18 && ticketAge <= 64) {
    console.log("Full price");
} else {
    console.log("Senior discount");
}

 id="z3f6qv"
let balance = -50;

let accountStatus = balance < 0 ? "Account Overdrawn" : "Account Active";

console.log(accountStatus);


let score = 45;
let grade;

if (score >= 80) {
    grade = "A";
} else if (score >= 70) {
    grade = "B";
} else if (score >= 60) {
    grade = "C";
} else if (score >= 50) {
    grade = "D";
} else {
    grade = "F";
}

switch (grade) {
    case "A":
        console.log("Grade A");
        break;
    case "B":
        console.log("Grade B");
        break;
    case "C":
        console.log("Grade C");
        break;
    case "D":
        console.log("Grade D");
        break;
    case "F":
        console.log("Grade F");
        break;
    default:
        console.log("Invalid grade");
}






