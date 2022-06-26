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

// ============================================================

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const item of this.potions) {
      if (item.name === newPotion.name) {
        return `Error! Potion ${item.name} is already in your inventory!`;
      }
    }
    // const newProduct = {
    //   ...newPotion,
    // };

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];
      if (potionName === name) {
        potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (oldName === this.potions[i].name) {
        this.potions[i].name = newName;
        return;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

console.table(atTheOldToad.getPotions()); // вращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
console.table(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })); // в массиве potions последним элементом будет этот объект
console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 })); // в массиве potions последним элементом будет этот объект
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })); // массив potions не изменяется  и  возвращает строку "Error! Potion Dragon breath is already in your inventory!"
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })); // массив potions не изменяется и  возвращает строку "Error! Potion Dragon breath is already in your inventory!"
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.removePotion('Dragon breath')); // в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.removePotion('Speed potion')); // в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')); // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
console.table(atTheOldToad.getPotions());
console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')); // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
console.table(atTheOldToad.getPotions());
