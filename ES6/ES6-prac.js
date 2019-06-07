// oldEnough = (num) => {
//     if (num >= 21){
//         return `You are allowed to drink!`
//     } else {
//         return `${num} is not a legal drinking age, sorry`
//     }
// }
// console.log(oldEnough(6));


//declare function using ES6 syntax
//conditional to evaluate higher number
//return the highest of the two
//use log to test the output twice
// greaterNum = (num1, num2) => {
//     if (num1 > num2) {
//         return num1
//     } else {
//         return num2
//     }
// }
// console.log(greaterNum(6, 8));
// console.log(greaterNum(12, 9));

var person = {
  name: "Alex Keaton",
  phone: 123456789,
  getData() { return this.name+"-"+this.phone }
};
//create two variables, one for the name and one for the number
const name = person.name
const phone = person.phone
console.log(name);
//declare an arrow function using spread operators and takes in any amount of letters and returns them in one word
var strings =
joinEm = (...letters) => {
    return letters.join('')
}
console.log(letters);
