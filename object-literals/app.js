const theChosinOne = {
  firstName: 'Harry',
  lastName: 'Potter',
  yearOfBirth: 1980,
  friends: ['Hermine', 'Ron'],
  address: {
    street: '4 Privet Drive',
    country: 'England'
  },
  getAge: function(){
    return 2018 - this.yearOfBirth;
  }
}

let val;

val = theChosinOne;
// Get specific value
// val = theChosinOne.firstName;
// val = theChosinOne['lastName'];
// val = theChosinOne.friends[1];
// val = theChosinOne.address.street;
// val = theChosinOne.address['city'];
val = theChosinOne.getAge();

console.log(val);

const daMembers = [
  {name: 'Ron', age: 30},
  {name: 'Hermine', age: 23},
  {name: 'Luna', age: 40}
];

for(let i = 0; i < theChosinOne.length; i++){
  console.log(theChosinOne[i].name);
}