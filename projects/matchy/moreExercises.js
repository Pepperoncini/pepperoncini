var data = { results: [ 
  { animal: 'fox', 
    numberOfLegs: 4, 
    says: '??', 
    matches: 
      [ 'dog', 'cat', 'pig']
  },
  { animal: 'frog', 
    numberOfLegs: 4, 
    says: 'ribbit', 
    matches: 
      [ 'whale', 'cat', 'pig', 'rabbit']
  },
  { animal: 'dog', 
    numberOfLegs: 4, 
    says: 'woof', 
    matches: 
      [ 'dog', 'fish', 'pig']
  },
  { animal: 'human', 
    numberOfLegs: 2, 
    says: 'hello', 
    matches: 
      [ 'frog', 'duck', 'pig']
  },
  { animal: 'fish', 
    numberOfLegs: 0, 
    says: 'blub', 
    matches: 
      [ 'dog', 'rabbit', 'frog', 'human']
  },
  { animal: 'whale', 
    numberOfLegs: 0, 
    says: 'aaarrrhhh', 
    matches: 
      [ 'duck', 'fish', 'pig']
  },
  { animal: 'duck', 
    numberOfLegs: 2, 
    says: 'quack', 
    matches: 
      [ 'fish', 'human', 'chicken', 'whale']
  }
  ]};

  // Use the .length property to console.log the length of the results
  // array.
console.log(data.results.length);
  // Imagine you want are making a search results page,
  // (console.log) all of the animal names in order.
  for (var obj of data.results) {
    console.log(obj.animal);
  }
  
  // Next, Capitalize the first letter of each name and put a label
  // Your end result should look like this:
  // Name: Fox
  // Name: Dog
  // Name: Frog
  // Name: Human
  // Name: Fish
  // etc.
   for (var obj of data.results) {
     let upperAnimal = obj.animal[0].toUpperCase();
     let restAnimal = obj.animal.slice(1);
     console.log("Name: " + upperAnimal + restAnimal + ", Legs: " + obj.numberOfLegs);
   }
  // Next, console.log the number of legs next to their name.
  // Your end result should look like this:
  // Name: Fox, Legs: 4
  // Name: Dog, Legs: 4
  // Name: Frog, Legs: 4
  // Name: Human, Legs: 2
  // Name: Fish, Legs: 0
  let resultsArray = [];
   for (var obj of data.results) {
     let upperAnimal = obj.animal[0].toUpperCase();
     let restAnimal = obj.animal.slice(1);
     resultsArray.push({Name: upperAnimal + restAnimal, Legs: obj.numberOfLegs});
   }
   console.log(resultsArray);
  // Now, redo the steps in the previous one and 
  // take this data and add it to an array with nested objects. 
  // Your result should look like this:
  var results = [
  {Name: 'Fox', Legs: 4},
  {Name: 'Dog', Legs: 4},
  {Name: 'Frog', Legs: 4},
  {Name: 'Human', Legs: 2},
  {Name: 'Fish', Legs: 0}
  ];

  // For another search result, console.log the animals whose matches are 'fish'
var fishMatches = [{name: 'dog', index: 2}, {name: 'whale', index:5}];
let index = 0;
for (var obj of data.results) {
  
  if (obj.animal === 'fish') {
    fishMatches.push({name: obj.animal, index: index});
  }
  index++;
}
  // Next, add it to an array called 'FishMatches'. 
  // Make each match an object with two properties 'name' and 'index'
  // Your end result should look like this:
  console.log(fishMatches);
