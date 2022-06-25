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
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let result = [];
  for (const product of products) {
    if ('name' === propName) {
      result.push(product.name);
    } else if ('quantity' === propName) {
      result.push(product.quantity);
    } else if ('price' === propName) {
      result.push(product.price);
    }
  }
  return result;
}

// Change code above this line

console.log(getAllPropValues('price'));
