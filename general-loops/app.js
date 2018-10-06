// FOR LOOP

// for(let i = 1; i < 10; i++){
//   if(i % 2 === 0){
//     console.log("go to the DA instead");
//     continue;
//   }

//   if(i % 5 === 0){
//     console.log('Don\'t let her get to you Harry');
//     break;
//   }

//   console.log('I must not tell lies');
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log("I love coding and watching Harry Potter");
//   i++;
// }

// DO WHILE - will always run at leat once 

// let i = 1;

// do {
//   console.log(i + " points for Gryffindor");
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

const houses = [ 'Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

for(let i = 0; i < houses.length; i++){
	console.log("Ten points for " + houses[i]);
}

// FOREACH
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP
// const users  = [
//   {id: 1, name:'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


// FOR IN LOOP
// const user = {
//   firstName: 'John', 
//   lastName: 'Doe',
//   age: 40
// }

// for(let x in user){
//   console.log(`${x} : ${user[x]}`);
// }