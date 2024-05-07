"use strict";
//   let foodNames = ["Steak Fajitas", "Chips and Guacamole", "Sweet Tea",];
// for (let index = 0; index < familytName.length; index++) {
//     console.log(familytName[index]);
//   }

let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

let subtotal = 0;
for (let index = 0; index < lunch.length; index++) {
  const menuItem = lunch[index];
  console.log(menuItem.price);

  subtotal += menuItem.price;
}
console.log(subtotal);
