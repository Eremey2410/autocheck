'use strict';

// ================23/32==================
// function filterArray(numbers, value) {
//   // Change code below this line
//   const arr = [];
//   for (const number of numbers) {
//     if (number > value) {
//       arr.push(number);
//     }
//   }
//   return arr;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]

// ================24/32==================

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit('plum')); //  true

// ================25/32==================

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const arrAll = [];
//   for (const arr of (array1, array2)) {
//     {
//       arrAll.push(arr);
//     }
//   }
//   return arrAll;

//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]

// ===========mod-3=====12/41==================

// function countProps(object) {
//   let propCount = 0;
//   let prop = [];
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       prop.push(key);
//       propCount = prop.length;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// ===========mod-3=====13/41==================

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

// ===========mod-3=====14/41==================

//  function countProps(object) {
//    // Change code below this line
//    let propCount = 0;
//    let keys = Object.keys(object);
//    propCount = keys.length;

//    return propCount;
//    // Change code above this line
//  }

// ===========mod-3=====16/41==================

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   let money = Object.values(salaries);
//   for (const salary of money) {
//     totalSalary += salary;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// ===========mod-3=====18/41==================

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;

//   // Change code above this line
// }

// console.log(getProductPrice('Grip'));

// ===========mod-3=====19/41==================
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
// // решение 1

// // Change code below this line

// //   let result = [];
// //   for (const product of products) {
// //     if ('name' === propName) {
// //       result.push(product.name);
// //     } else if ('quantity' === propName) {
// //       result.push(product.quantity);
// //     } else if ('price' === propName) {
// //       result.push(product.price);
// //     }
// //   }
// //   return result;
// // }

// // Change code above this line

// // решение 2
// // Change code below this line
//   let result = [];
//   for (const product of products) {
//     switch (propName) {
//       case 'name':
//         result.push(product.name);
//         break;

//       case 'price':
//         result.push(product.price);
//         break;

//       case 'quantity':
//         result.push(product.quantity);
//         break;
//     }
//   }
//   return result;
// }
// // Change code above this line
// console.log(getAllPropValues('name'));

// ===========mod-3=====20/41==================

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Droid'));

// ===========mod-3=====30/41==================

// function makeTask(data) {
//   // const completed = false;
//   // const category = 'General';
//   // const priority = 'Normal';
//   // Change code below this line
//   const { text: text, completed = false, category = 'General', priority = 'Normal' } = data;
//   return { category, priority, ...data, completed };
//   // Change code above this line
// }
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));

// ===========mod-3=====31/41==================

//  решение 1
// // Change code below this line
// function add(...args) {
//   let result = 0;
//   for( let i = 0; i < args.length; i += 1){
// result += args[i];
//   }
//   return result;
//     // Change code above this line
// }

// решение 2

// // Change code below this line
// function add(...args) {
//   let result = 0;
//   for( let arg of args){
// result += arg;
//   }
//   return result;
//     // Change code above this line
// }

// ===========mod-3=====32/41==================

// // Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     if( args[0] < arg){
//     total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// ===========mod-3=====33/41==================

// // Change code below this line
// function findMatches(...args) {
//   const matches = []; // Don't change this line
//   const firstArray = args[0];
//   for (const arg of args) {
//     for (const firstArr of firstArray) {
//       if (arg === firstArr) {
//         matches.push(arg);
//       }
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// ===========mod-3=====34/41==================

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);

//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook('The guardian of dreams', 'Dungeon '));
// console.log(bookShelf.books);

//  ===========mod-3=====41/41==================

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// ===============================решение 41/41=============================

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const item of this.potions) {
//       if (item.name === newPotion.name) {
//         return `Error! Potion ${item.name} is already in your inventory!`;
//       }
//     }
//     // const newProduct = {
//     //   ...newPotion,
//     // };

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];
//       if (potionName === name) {
//         potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.table(atTheOldToad.getPotions()); // вращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// console.table(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })); // в массиве potions последним элементом будет этот объект
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 })); // в массиве potions последним элементом будет этот объект
// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })); // массив potions не изменяется  и  возвращает строку "Error! Potion Dragon breath is already in your inventory!"
// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })); // массив potions не изменяется и  возвращает строку "Error! Potion Dragon breath is already in your inventory!"
// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Dragon breath')); // в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Speed potion')); // в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')); // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')); // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
// console.table(atTheOldToad.getPotions());

//  ===========mod-4==========2/48==================

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza));
// // возвращает строку "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage('Ultracheese', deliverPizza));
// // возвращает строку "Delivering Ultracheese pizza."

//  ===========mod-4==========3/48==================

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`EatingPizza ${pizzaName}.`);
// });

//  ===========mod-4==========4/48==================

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(pizzaName);
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// //==========================решение 2============================

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas)
//       if (pizza === pizzaName) {
//         return onSuccess(pizzaName);
//       }
//     return onError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

//  ===========mod-4==========5/48==================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach(element => {
//     totalPrice += element;
//   });
//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138

//  ===========mod-4==========6/48==================

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //  возвращает  [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает  [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //  возвращает  []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //  возвращает  [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76]

//  ===========mod-4==========7/48==================

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //  возвращает [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40]

//  ===========mod-4==========13/48==================

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newNumbers.push(number + value);
//     }
//     if (number % 2 !== 0) {
//       newNumbers.push(number);
//     }
//   });
//   return newNumbers;

//   // Change code above this line
// }
// // Change code above this line

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // возвращает новый массив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // возвращает новый массив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // возвращает новый массив [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // возвращает новый массив [144, 13, 81, 192, 136, 154]

//  ===========mod-4==========14/48==================

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

//  ===========mod-4==========22/48==================

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   const filterColor = users.filter(user => user.eyeColor === color);
//   return filterColor;
// };

// // Change code above this line

//  ===========mod-4==========35/48==================

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => total + player.playtime / player.gamesPlayed,
//   0
// );
// console.log(totalAveragePlaytimePerGame);

//  ===========mod-4==========45/48==================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);

//  ===========mod-4==========10/20==================

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove, 0), 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//  ===========mod-4==========11/20==================

class StringBuilder {
  constructor(value) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value = this.value + str;
  }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
}

// Change code above this line
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
