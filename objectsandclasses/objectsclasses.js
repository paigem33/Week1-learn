//declare an object variable containing first and last name
//access the first name then the last name of that object

//OBJECTS
//Exercise #1,2,3
// var person = {
//     fName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     getData: function() {
//         return `${this.fName} ${this.lastName} is from ${this.homePlanet}`
//     }
// }
// console.log("First name:", person.fName);
// console.log("Last name:", person.lastName);
// console.log("Home planet:", person.homePlanet);
// console.log(person.getData());


//Exercise #4
//declare a variable object
//write a function inside the variable to return what the product is and what it costs
// var product = {
//     name: "chair",
//     price: 14.99,
//     describeProduct: function() {
//         return `The product is a ${this.name}. It costs $${this.price}`
//     }
// }
// console.log(product.describeProduct());


//Excercise #5,6,7
//declare an object variable, 'lunch'
//access the ingredients property
// var lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"],
//     makeSandwich() {
//         return `The ingredients for a peanut butter and banana sandwich are ${this.ingredients}.`
//     }
// }
// console.log(lunch.ingredients);
// console.log(lunch.ingredients[2]);
// console.log(lunch.makeSandwich());


//CLASSES
//Exercise template
// class Coffee {
//   constructor(type, cream=0, sugar=0){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }
//
//   creams() {
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }
//
//    sugars() {
//     if (this.sugar > 1){
//     return `${this.sugar} sugars`
//     } else {
//     return `${this.sugar} sugar`
//   }
// }
//   coffeeProfile() {
//      return `${this.type}: ${this.creams()}, ${this.sugars()}`
//   }
// }
// //Exercise #1-3
// //using the provided Coffee class above, write the code to make a black coffee
// const blackCoffee = new Coffee ('blAck', 0, 0)
// const coffee1 = new Coffee ('simple coffee', 1, 2)
// const coffee2 = new Coffee ('sweetBoi', 0, 2)
//
// console.log(blackCoffee.coffeeProfile());
// console.log(coffee1.coffeeProfile());
// console.log(coffee2.coffeeProfile());

//Exercises 4-7
// class Latte {
//   constructor(type, milkType='milk', shot=1){
//     this.type = type.toLowerCase()
//     this.milkType = milkType
//     this.shot = shot
//   }
//   //  shot() {
//   //   if (this.shot > 1){
//   //   return `${this.shot} shots`
//   //   } else {
//   //   return `${this.shot} shot`
//   // }
// // }
//   latteProfile() {
//     return `${this.type}: ${this.milkType}, ${this.shot} shot(s)`
//   }
// }
// const latte1 = new Latte ('fancy', 'milk', 1)
// const hazLatte = new Latte ('Hazelnut Double-Shot', 'almond milk', 2)
// console.log(latte1.latteProfile());
// console.log(hazLatte.latteProfile());


//Exercises 8
//make a class that has a product and a budget in the constructor
//make a function to determine if the projuct is in budget
// var budget = 200
// class Shop {
//     constructor(product, price){
//     this.product = product
//     this.price = price
//     }
//     inBudget(){
//         if (this.price <= budget){
//             return `${this.product} is in budget`
//         } else {
//             return `${this.product} is not in budget. Put it back!`
//         }
//     }
// }
// const popCorn = new Shop ('Popcorn maker', 300)
// console.log(popCorn.inBudget());


//Exercise 9
// var volume = 0
// class Cylinder {
//     constructor(height, radius) {
//         this.height = height
//         this.radius = radius
//     }
//     findVol() {
//         volume = 3.14 * this.radius * 2 * this.height
//         return volume.toFixed(4)
//     }
// }
// const test = new Cylinder (3, 8)
// console.log(test.findVol());


//Exercise 10

//create a class that we will use as a blueprint for finding total, tax, and weight of items in the shopping cart
const cartItems = [
  {
    name: "banana",
    price: 2.34,
    weight: 1.2
  },
  {
    name: 'Cereal',
    price: 5.67,
    weight: 2.2
  },
  {
    name: 'Gogurt',
    price: 3.99,
    weight: 3.1
  }
]

 function totalPrice(arr1) {
    cartCost = 0
    for(let i = 0; i<arr1.length;i++){
        cartCost += cartItems[i].price
    }
    return cartCost
}
function totalWeight(arr1) {
   cartWeight = 0
   for(let i = 0; i<arr1.length;i++){
       cartWeight += cartItems[i].weight
   }
   return cartWeight
}
//
 console.log(totalPrice(cartItems), totalWeight(cartItems));
// class Totals {
//     constructor(total, weight){
//         this.total = total
//         this.weight = weight
//     }
//     //loop through the array of objects and add together each price, save to varibale total
//     totalPrice(arr1) {
//         cartCost = 0
//         for(let i = 0; i<arr1.length;i++){
//             cartCost += cartItems[i].price
//         }
//         return cartCost
//     }
//     totalWeight() {
//         cartWeight = 0
//         for(let = 0; i < cartItems.length; i++) {
//             cartWeight =+ cartItems[i].weight
//         }
//         return cartWeight
//     }
//     //loop through the array of objects and add together each weight, save to a variable 'weight'
// }
// var something = new Totals
// console.log(cartItems.totalPrice())
// console.log(cartItems.totalWeight());
