// Create some arrays
const wizards = ['Harry','Ron',' Hermine','Malfoy'];
const yearOfRelease = new Array(2002, 1998, 2010, 1999,2000,2001,  2003, 1997, 20004, 2005,2007, 2009,  2011);
const  houses= ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Sytherin'];


let val;

// Get array length
val = wizards.length;
// Check if is array
val = Array.isArray(wizards);
// Get single value
val = wizards[3];
val = wizards[0];
// Insert into array
wizards[2] = 'Luna';
// Find index of value
val = wizards.indexOf('Ron');

// MUTATING ARRAYS
// // Add on to end
// wizards.push('Hermine');
// // Add on to front
// wizards.unshift('Fred');
// // Take off from end
// wizards.pop();
// // Take off from front
// wizards.shift();


//// Splice values
// wizards.splice(1,1);
//Overwrite item at a specific index using Splice
	//wizards.splice(1, 1, 'Hagrid');
	//return ["Harry", "Hagrid", "Malfoy"]
//Add new item(s) at a specific index using Splice
	//wizards.splice(2, 1, 'Albus', 'Sirius');
	// return ["Harry", "Ron", "Albus", "Sirius", "Malfoy"]
//Remove single item at a specific index
	//wizards.splice(3, 1);
	// return["Harry", "Ron", "Luna"]





// // Reverse
// wizards.reverse();

// Concatenate array - Join two arrays together
wizardsAndHouses = wizards.concat(houses);

// Sorting arrays
//Sort in alphabetical order
//val = wizards.sort();


//Use the "compare function" sorts numerical order
//  val = yearOfRelease.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort
// val = yearOfRelease.sort(function(x, y){
//   return y - x;
// });

// Find
// function over50(num){
//   return num > 50;
// }

function yearOver2000(year){
  return year > 1999;
}

val = yearOfRelease.find(yearOver2000);



console.log(wizards);
console.log(val);
