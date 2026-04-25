//** 2-3 Sorting and flattening array explained */

//Sort
const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

// In place sorting (mutates the original array)
const sortedNumbersAsc = numbers.sort((a, b) => a - b); //** Sort numbers in ascending order
// const sortedNumber = numbers.sort((a, b) => b - a); //** Sort numbers in descending order
// const sortedFruits = fruits.sort((a, b) => a.localeCompare(b)); //** Sort fruits in alphabetical order

console.log(numbers);
console.log(sortedNumbersAsc);
// console.log(sortedNumber);
// console.log(sortedFruits);

//Nested array flat

const arr = [1, 2, [3, 4], [5, 6, [7, 8]], 9];
const flatArr = arr.flat(Infinity); //** Flatten the nested array to a single level
console.log(flatArr);
/**[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]*/

const tagFromPosts = [
  ["javascript", "programming", "web"],
  ["python", "data science", "machine learning"],
  ["java", "spring", "backend"],
];

const filterTags = new Set(tagFromPosts.flat()); //** Flatten the nested array of tags and create a Set to get unique tags
console.log(filterTags);

//some
const currentUserRoles = ["user", "editor"];
const featureAccessRoles = ["admin", "manager"];
