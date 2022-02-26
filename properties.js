const bottle = {
  color: "yellow",
  hold: "watet",
  price: 50,
  isCleand: true,
};
// Get all properties name
const keys = Object.keys(bottle);
// console.log(keys);

// Get all values
const values = Object.values(bottle);
// console.log(values);

// Get all key value pairs
const pairs = Object.entries(bottle);
// console.log(pairs);

// Seal Object
/* 
    (❌)  Deletion of existing properties
    (❌)  Insertion of new properties
    (✅) Modification of new properties
*/
// Object.seal(bottle);

// Freeze
/* 
    (❌)  Deletion of existing properties
    (❌)  Insertion of new properties
    (❌) Modification of new properties
*/
Object.freeze(bottle);

bottle.price = 100;
//  Delete object properties
delete bottle.isCleand;
console.log(bottle);
