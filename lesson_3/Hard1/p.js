// Given a string, write a function changeMe which returns the same
// string but with all the words in it that are palindromes uppercased.

// changeMe("We will meet at noon") == "We will meet at NOON"
// changeMe("No palindromes here") = "No palindromes here"
// changeMe("") == ""
// changeMe("I LOVE my mom and dad equally") == "I LOVE my MOM and DAD equally"


function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function changeMe(string) {
  let arr = [];
  string.split(' ').forEach(word => {
    if (isPalindrome(word)) {
      arr.push(word.toUpperCase());
    } else {
      arr.push(word);
    }
  });
  return arr.join(' ');
}

console.log(changeMe("I LOVE my mom and dad equally"));


// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// palindromeSubstrings("supercalifragilisticexpialidocious") == ["ili"]
// palindromeSubstrings("abcddcbA") == ["bcddcb", "cddc", "dd"]
// palindromeSubstrings("palindrome") == []
// palindromeSubstrings("") == []


//input: A string, function name, the words are case sensitive
//output: All substrings which are palindrome into an array.

// Question: What is the substring?
// what is the palidrome?
// What do you mean by a palindrome words are case sensitive.
// Rules : - returns only strings which are palindromes
// - palindromes which are case sensitive should not considered


// for (let i = 1; i <= 100; i += 1) {
//   console.log(i * 2);
// }
// console.log('LAUNCH!');


let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let fruits = {};
  let vegetables = {};
  let keyValuesArray = Object.entries(obj);
   keyValuesArray.forEach(ele => {
    let key = ele[0];
    let value = ele[1];
    if (value === 'Vegetable') {
       vegetables[key] = value;
    }
  });
  // for (let i = 0; i < keyValuesArray.length; i += 1) {
  // let [key, value] = keyValuesArray[i];
  // if (keyValuesArray[i].includes('Fruit')) {
  //   fruits[key] = value;
  // }
  // }
//   let objKeys = Object.keys(obj);
// for (let i = 0; i < objKeys.length; i += 1) {
//   let newKey = objKeys[i];
//   let newValue = obj[newKey];
//   if (newValue === 'Fruit') {
//     fruits[newKey] = newValue;
//   }
// }
return vegetables;
}
console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// function doubleNumbers(arr, multiplier) {
//   let doubleArr = [];
// for (let i = 0; i < arr.length; i += 1) {
// //if (i % 2 !== 0) {
//   doubleArr.push(arr[i] * multiplier)
// //} else {
//   //doubleArr.push(arr[i])
// //}
// }
// return doubleArr;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers, 3))
// console.log(myNumbers);

let array = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLength(arr) {
 return arr.reduce(function(acc, val) {
    if (val.length % 2 === 1) {
     acc.push(val.length);

    }
    return acc;
  }, []);

}
console.log(oddLength(array));

// let numbers = [3, 5, 7];

// function sumOfSquares(arr) {
// return arr.reduce((acc, val) => acc + (val ** 2),0);


// }
// console.log(sumOfSquares(numbers)); // => 83