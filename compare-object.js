const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

if (first === third) {
  //   console.log("Objects are same");
} else {
  //   console.log("Objects are different");
}

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
if (JSON.stringify(first) === JSON.stringify(second)) {
  console.log("Objects are same");
} else {
  console.log("Objects are different");
}

const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1 };
console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));
if (JSON.stringify(first2) === JSON.stringify(second2)) {
  console.log("Objects are same");
} else {
  console.log("Objects are different");
}

const first3 = { a: 1, b: 2 };
const second3 = { b: "2", a: 1 };
// Way
function compareObject(obj1, obj2) {
  // step-1
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  //   step-2
  for (const prop in obj1) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }
  return true;
}

const isEqual1 = compareObject(first, second);
const isEqual2 = compareObject(first2, second2);
const isEqual3 = compareObject(first3, second3);
console.log(`Compare first & second:  ${isEqual1}`);
console.log(`Compare first2 & second2:  ${isEqual2}`);
console.log(`Compare first3 & second3:  ${isEqual3}`);
