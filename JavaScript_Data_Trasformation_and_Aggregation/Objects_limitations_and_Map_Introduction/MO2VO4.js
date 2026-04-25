//some

const numbers = [1, 2, 3, 4, 5];
const hasOddNumber = numbers.some((num) => num % 2 !== 0); //** Check if there is at least one odd number in the array
console.log(hasOddNumber); // Output: true

const currentUserRoles = ["user", "editor"];
const featureAccessRoles = ["admin", "manager"];

//** Check if the user has access to the feature by checking if any of the user's roles are included in the feature's access roles */
const hasAccess = currentUserRoles.some((role) =>
  featureAccessRoles.includes(role),
); //** Check if the user has access to the feature
console.log(hasAccess); // Output: false

//** Array.from() */
const arr = Array.from([1, 2, 3], (value, index) => value * value); //** Create a new array from the given array and apply a mapping function to each element */
console.log(arr); // Output: [1, 4, 9]

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  ); //** Create a range of numbers from start to stop with a given step */
console.log(range(0, 10, 2)); // Output: [0, 2, 4, 6, 8]
