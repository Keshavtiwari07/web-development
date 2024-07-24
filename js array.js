const myArr = [1, 2, 3, 4, 5];
const myArr2 = new Array(1, 2, 3, 4);

for (let i = 0; i < myArr2.length; i++) {
    console.log(myArr2[i]);
}

// Adding an element at the end of the array
myArr.push(6);
console.log(myArr);

// Removing last element of the array.
myArr.pop();
console.log(myArr);

// Adding an element at the start of the array
myArr.unshift(0);
console.log(myArr);

// Removing the first element of the array
myArr.shift();
console.log(myArr);

// Checking if an element exists in the array
console.log(myArr.includes(6));

// Finding the index of an element
console.log(myArr.indexOf(5));

// Finding the index of an element that doesn't exist
console.log(myArr.indexOf(6));

// Joining the array elements into a string
const newArr = myArr.join();
console.log(myArr);
console.log(typeof myArr);
console.log(typeof newArr);

// Slicing the array (does not change the original array)
console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

// Splicing the array (changes the original array)
const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C", myArr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["abc", "deaf", "third"];

// Concatenating two arrays
const arr3 = arr1.concat(arr2);
console.log(arr3);

// Using spread operator to concatenate two arrays
const arr4 = [...arr1, ...arr2];
console.log(arr4);

// Expected output of concat and spread:
// [ 1, 2, 3, 4, 5, 'abc', 'deaf', 'third' ]
// [ 1, 2, 3, 4, 5, 'abc', 'deaf', 'third' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattening the array
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// Checking if a value is an array
console.log(Array.isArray("keshav")); // false

// Creating an array from a string
console.log(Array.from("keshav")); // ['k', 'e', 's', 'h', 'a', 'v']

// Creating an array from an object (returns an empty array since the object is not iterable)
console.log(Array.from({name: "keshav"})); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Creating an array from a list of values
console.log(Array.of(score1, score2, score3));
