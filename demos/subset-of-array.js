"use strict";

let menu = [
{id: 1, item: "Tacos", category: "Meal", price: 12.29},
{id: 2, item: "Burger", category: "Meal", price: 7.29},
{id: 3, item: "Salad", category: "Meal", price: 8.29},
{id: 4, item: "Ice Tea", category: "Drink", price: 2.29},
{id: 5, item: "Coke", category: "Drink", price: 2.29},






];





for (let index = 0; index < menu.length; index++) {
    const menuItem = menu[index];
    console.log(menuItem);
    
    if (menuItem.category == "Drink") {
        drinks.push(menuItem)
    }
    
}

console.log(drinks)