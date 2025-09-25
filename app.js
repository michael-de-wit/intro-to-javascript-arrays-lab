//Exercise 1
/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

//Exercise 2
/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push(`pizza`)
foods.push(`cheeseburger`)

console.log('Exercise 2 result:', foods);

//Exercise 3
/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

// console.log('Exercise 3 initial:', foods);

foods.unshift(`tacos`)

console.log('Exercise 3 result:', foods);

//Exercise 4
/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

// console.log('Exercise 4 initial:', foods);

// console.log(foods[1]);

const favFood = foods[1] //pizza

console.log('Exercise 4 result:', favFood);

//Exercise 5
/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

// console.log('Exercise 5 initial:', foods);

foods.splice(1,0,`tofu`)

console.log('Exercise 5 result:', foods);

//Exercise 6
/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

// console.log('Exercise 6 result:', foods);

foods.splice(2,1,`sushi`,`cupcakes`)

console.log('Exercise 6 result:', foods);

//Exercise 7
/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

// console.log('Exercise 7 initial:', foods);

let yummy = foods.slice(2,4)

console.log('Exercise 7 result:', yummy);

//Exercise 8
/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

// console.log('Exercise 8 initial:', foods);

let soyIdx = foods.indexOf(`tofu`);

console.log('Exercise 8 result:', soyIdx);

//Exercise 9
/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

let allFoods = foods.join(` -> `);

console.log('Exercise 9 result:', allFoods);

//Exercise 10
/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

// console.log('Exercise 10 initial:', foods);

let hasSoup = foods.includes(`soup`);

console.log('Exercise 10 result:', hasSoup);

//Exercise 11
/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = [] //Initialize odds array

for (let i = 0; i<nums.length;i++) { //go through the nums array
    currentNum = nums[i] //var for the current number
    // console.log(currentNum,currentNum % 2); //print current number, remainder by 2
    if(currentNum % 2 != 0) { //if current number does not have 0 remainder (0 indicates even, 1 indicates odd)
        // console.log('odd'); //print if odd
        odds.push(currentNum) //add the odd numbers to the odds array
    }
}

console.log('Exercise 11 result:', odds);

//Exercise 12
/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

// console.log(nums);

let fizz = [] //To be an array with numbers divisible by 3
let buzz = [] //To be an array with numbers divisible by 5
let fizzbuzz = []  //To be an array with numbers divisible by 3 and 5

for (let i = 0; i < nums.length; i++) {
    currentNum = nums[i] //var for the current number
    
    if(currentNum % 3 === 0) { // if the current number is divisible by 3
        fizz.push(currentNum) // add div by 3 number to fizz array
    } 
    if(currentNum % 5 === 0) { // if the current number is divisible by 5
        buzz.push(currentNum)  // add div by 5 number to buzz array
    }
    if(currentNum % 3 === 0 && currentNum % 5 === 0) { // if the current number is divisible by 3 and 5
        fizzbuzz.push(currentNum)  // add div by 5 number to buzz array
    }
}

// console.log(fizz);
// console.log(buzz);
// console.log(fizzbuzz);

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

//Exercise 13
/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

let lastIndex = numArrays.length-1 // get the last index in the L1 array

// console.log(numArrays[lastIndex])
let numList = numArrays[lastIndex] // Extract the last L2 array

console.log('Exercise 13 result:', numList);

//Exercise 14
/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

console.log('Exercise 14 initial:', numArrays);

// console.log(numArrays[2][1]);

let num = numArrays[2][1] // Extract 66 from L1 array 2, L2 array 1

console.log('Exercise 14 result:', num);

//Exercise 15
/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

console.log(numArrays);

let total = 0 // start total at 0

for(let i = 0; i < numArrays.length; i++) { // Go through L1 array
    l2Array = numArrays[i] // Create variable with the L2 array
    // console.log(l2Array);
    
    for(let j = 0; j < l2Array.length; j++) { // Go through the L2 array
        l2ArrayValue = l2Array[j] // Create variable with the L2 array value
        // console.log(l2ArrayValue);
        total = total + l2ArrayValue // Add the L2 array value to the current total
    }
}

console.log('Exercise 15 result:\n', total);
