// Import Error class
const Error = require('./error.js');

const closeEnough = (change, price) => {
  
  if(change.length === 0)
    return Error.arrayLength();

  let units = [0.25, 0.10, 0.05, 0.01];
  let unitChanges = [];


  change.forEach((c, ix) => {
    units.forEach((u, indx) => {
      if(ix === indx) {
        unitChanges.push(c * u);
      }
    });
  });
  
  let totalChange = unitChanges.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  if(totalChange >= price)
    return true;
  
  return false;
}

closeEnough([], 12.55);






// FALTA CREACION DE UNA CLASE CON METODOS DE NIVEL DE CLASE PARA ERRORES


/******
 * 
Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.


changeEnough([2, 100, 0, 0], 14.11) ➞ false
changeEnough([0, 0, 20, 5], 0.75) ➞ true
changeEnough([30, 40, 20, 5], 12.55) ➞ true
changeEnough([10, 0, 0, 50], 3.85) ➞ false
changeEnough([1, 0, 5, 219], 19.99) ➞ false


Notes

    quarter: 25 cents / $0.25
    dime: 10 cents / $0.10
    nickel: 5 cents / $0.05
    penny: 1 cent / $0.01
 */





/* const changeEnough = (arr, num) => {

  if(arr.length === 0)
    return; 

  let valueItem = num;
  let centsArr = [0.25, 0.10, 0.05, 0.01];

  let newArr = [];

  arr.forEach((item, ix) => {
    centsArr.forEach((cent, inx) => {
      if(ix === inx) {
        newArr.push(item * cent);
      }
    })
  });

  const pocketChange = newArr.reduce((a, b) => { return a + b });
  
  if(pocketChange >= valueItem) {
    return true;
  }

  return false;

  
}

changeEnough([30, 40, 20, 5], 12.55);
 */
