const bottle = {
  color: "yellow",
  hold: "watet",
  price: 50,
  isCleand: true,
};
/* 
for (let i = 0; i<10; i++){}
for(const num of numbers){}  // array
for(const prop in bottleObj){}
 */

// properties
for (const prop in bottle) {
  //   console.log(prop, bottle[prop]);
}

// Keys
const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
  console.log(prop, bottle[prop]);
}

// Advanced
const entries = Object.entries(bottle);
console.log(entries);
for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}
