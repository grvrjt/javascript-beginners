console.log("******************for..of cycle************************************")
const array1 = [1, 2, 3, 4, 5, 6];
for (let element of array1) {
    console.log(element);
}

console.log("******************for cycle************************************")
const colors = ['red', 'green', 'blue'];
for (let index = 0; index < colors.length; index++) {
    let color = colors[index];
    console.log(color);
}

console.log("******************array.forEach()************************************")

colors.forEach((value, index, array) => {
    console.log(array, ' --', index, '--', value)
})

console.log("******************array.map()************************************")
const newArray = array1.map((value, index, array) => {
    return value + 1;
})
console.log("array.map()----->", newArray);

console.log("******************Array.from()************************************")
const arrayFrom = Array.from(array1, (value, index, array) => {
    return value + 1
})
console.log("Array.from()  RESULT ---->", arrayFrom);

console.log("******************array.reduce()************************************")
const arrayReduce = array1.reduce((accumulator, value) => {
    return accumulator + value;
}, 0)
console.log("array.reduce()  RESULT ---->", arrayReduce);


console.log("******************array.concat(array1)************************************")
const heroes = ['Batman', 'Robin'];
const villains = ['Joker', 'Bane'];
const everyone = heroes.concat(villains);
console.log("array.concat(array1)----RESULT -->", everyone)


console.log("******************spread Operator************************************")
const heroes1 = ['Batman', 'Catwoman'];
const villains1 = ['Joker', 'Bane'];
const names = [...heroes1, ...villains1];
console.log("spread operator----RESULT -->",names); 

console.log("******************array.slice()************************************")
//  array.slice([fromIndex[, toIndex]]) returns a slice of the array starting
//  fromIndex and ending toIndex (excluding toIndex itself). fromIndex optional
//   argument defaults to 0, toIndex optional argument defaults to array.length.

const names1 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const heroes2 = names.slice(0, 2);
const villains3 = names.slice(2);
console.log("array.slice() operator----RESULT -->",heroes); 
console.log("array.slice() operator----RESULT -->",villains); 
