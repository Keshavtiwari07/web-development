const myArr=[1,2,3,4,5]
const myArr2=new Array(1,2,3,4)

for (let i=0;i<myarr2.length;i++){
    console.log(myArr2[i]);
}
// method 
myArr.push(6);
 console.log(myArr);
 
 myArr.pop();
  console.log(myArr);

unshift => start pe insert 
myArr.unshift(0);
  console.log(myArr);

  shift => first element removed
 myarr.shift();
  console.log(myArr);

console.log(myArr.includes(6));
console.log(myArr.indexOf(5));
console.log(myArr.indexOf(6));

const newArr = myArr.join();
console.log(myArr);
console.log(typeof myArr);
console.log(typeof newArr);

slice and splice = orignal me bhi change
 console.log("A",myArr);
 
const myn1 = myArr.slice (1,3)
 console.log(myn1);
  
  console.log("B",myArr);

const myn2 = myArr.splice (1,3)
 console.log(myn2); 

 console.log("c",myArr); 
 
 const arr1 = [1,2,3,4,5];
 const arr2= ["abc","deaf","third"];

//  arr1.push(arr2);
/console.log(arr2);//["abc","deaf","third"];
//console.log(arr1);//  after push [ 1, 2, 3, 4, 5, [ 'abc', 'deaf', 'third' ] ]

  const arr3=arr1.concat(arr2); // concat new arr
  
  console.log(arr3);
   const arr4=[...arr1,...arr2];
  console.log(arr4);
  
//    output of concat and spread
// [ 1, 2, 3, 4, 5, 'abc', 'deaf', 'third' ]
// [ 1, 2, 3, 4, 5, 'abc', 'deaf', 'third' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);// all elements stored in seperate 
console.log(real_another_array);



console.log(Array.isArray("keshav")) // checking array exists or not
console.log(Array.from("keshav")) // array = ['k','e','s','h','a','v']
console.log(Array.from({name: "keshav"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

