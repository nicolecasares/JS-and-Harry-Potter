// FUNCTION DECLARATIONS


function chosenOne(firstName = "Harry", lastName = "Potter"){
  return `The chosen one\'s name is ${firstName} ${lastName}.`
}

console.log(chosenOne());

console.log(chosenOne('Neville','Longbottom'));

// FUNCTION EXPRESIONS - putting fuction as variable assignment
  //- have benifites with hoisting and closers 


const square = function(x = 3){
  return x*x;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
  //function you run and declare at the same time.
  //useful in modular patterns


(function(name = "J.K. Rowling"){
    console.log('The biggest Harry Potter fan is ' + name);
  })( "Nicole");

// PROPERTY METHODS - funtion inside an object

const jkRowling = {
  firstBook: function(){
    console.log('Harry Potter and the Sorcerer\'s Stone');
  },
  secondBook: function(name){
    console.log(`${name} and the Chamber of Secrets`);
  }
}

jkRowling.thirdBook = function(){
  console.log('Harry Potter and the Prisoner of Azkaban');
}

jkRowling.firstBook();
jkRowling.secondBook("Harry Potter");
jkRowling.thirdBook();
