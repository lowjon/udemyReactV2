//
// Object destructuring
//

// const person ={
//   name: 'Jon',
//   age: 31,
//   location: {
//     city: 'Cardston',
//     temp: 4
//   }
// }
//
// const {name: firstName ='Anonymous', age} = person
//
// console.log(`${firstName } is ${age}`);
// const {temp: temperature, city} = person.location
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// }
//
// const {name: publisherName = 'Self-published'} = book.publisher
//
// console.log(publisherName);




//
// Array destructuring
//

//
// const address = ['1299 S Juniper Street', 'Philidelphia', 'Pennsylvania', '19147']
//
// const [, city, state = 'New York',] = address
//
//
// console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [selectedItem, ,itemCost] = item

console.log(`A medium ${selectedItem} costs ${itemCost}.`);
