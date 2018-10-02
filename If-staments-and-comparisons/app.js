// if(something){
//   do something
// } else {
//   do something else
// }

// const harryAge = 11;

// // EQUAL TO
// if(harryAge == "11"){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(harryAge != 10){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(harryAge === "11"){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(harryAge !== 11){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof harryAge !== 'undefined'){
//   console.log(`Harry's age is ${harryAge}`);
// } else {
//   console.log('I dont know Harry Potters age.');
// }



// GREATER OR LESS THAN
// if(harryAge <= 11){
//   console.log('Harry is attending Hogwarts');
// } else {
//   console.log('Harry is not attending Hogwarts');
// }

// IF ELSE

// const hogartsHouse = 'Slytherin';

// if(hogartsHouse === 'Gryffindor'){
//   console.log('10 points for Gryffindor!');
// } else if(hogartsHouse === 'blue'){
//   console.log('What are you a Hufflepuff!');
// } else {
//   console.log('Please don\'t tell me your a Slytherin');
// }

//11 to 17

// LOGICAL OPERATORS

// const name = 'Harry';
// const isWizard = true;
// const age = 13;

// AND &&
// if(age < 11){
//   console.log(`${name} is too young for Hogwarts`);
// } else if(age <= 11 && age < 17 && isWizard){
//   console.log(`${name} is currently attending Hogwarts`);
// } else if (age > 17) {} {
//   console.log(`${name} is no longer attening Hogwarts`);
// }



const personality = "ambitious";
let evil = true;

// // OR ||
if (personality == "ambitious" || evil == true){
  console.log("You might be a Slytherin");
} else {
  console.log("Most likely not a Slytherin");
}

const name = 'Harry'

// // TERNARY OPERATOR
console.log( name === "Harry" ? 'Chosen One' : 'Normal Wizards');

// WITHOUT BRACES
// if(name === "Harry" )
//   console.log('Chosen One');
// else
//   console.log('Normal Wizard');

