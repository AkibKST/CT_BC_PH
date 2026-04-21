// Big o notation with array method (map, find)
// O(n) - linear time complexity

// const startTime = performance.now();
// console.time("task");

const firstArray = [];
const secondArray = [];

for (let i = 0; i < 600000; i++) {
  if (i < 300000) {
    firstArray.push(i);
  }
  secondArray.push(i);
}

console.log(firstArray.length, "firstArray");
console.log(secondArray.length, "secondArray");
// const endTime = performance.now();
// console.log(`Execution time: ${endTime - startTime} ms`);
// console.timeEnd("task");

console.time("map1");
const firstUserList = firstArray.map((number) => ({ userId: number }));
console.timeEnd("map1");

console.time("map2");
const secondUserList = secondArray.map((number) => ({ userId: number }));
console.timeEnd("map2");

console.time("find");

// const user = secondUserList.find((user) => user.userId === 9999);
const user = secondUserList[99999];

console.timeEnd("find");
