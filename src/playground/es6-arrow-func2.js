//argument object no longer bound with arorw functions

// const add = (a,b) => {
//   // console.log(arguments);
//   return a + b
// }
//
// console.log(add(55, 1));
// // this keyword  no longer bound
//
// const user = {
//   name: 'Jon',
//   cities: ['Carston', 'Provo', 'Johannesburg'],
//   printPlacesLived() {
//     return this.cities.map((city) => this.name + ' has lived in ' + city  + '.')
//     }
//   }
//
//
// console.log(user.printPlacesLived())

//challenge area:

const multiplier = {
  // numbers - array of numbers
  numbers: [1,2,3,4,5],
  // multiplyBy - single numbers
  multiplyBy: 2,
  // multiply - a method that returns a new array where the numbers have been multiplied
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply());
