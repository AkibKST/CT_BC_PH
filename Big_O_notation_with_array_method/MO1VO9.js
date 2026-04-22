//  Analysis of O(n) and O(n^2)

// create data set
function generateSimData(size) {
  const itemPool = [
    "apple",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "melon",
    "peach",
    "pear",
    "plum",
    "berry",
  ];

  //   generate random data
  const generateData = [];

  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    generateData.push(itemPool[randomIndex]);
  }
  return generateData;
}

// huge data set
const hugeDataSet = generateSimData(5000000);

console.log("Data Set:", hugeDataSet.length);

// console.log("Data Set:", hugeDataSet);

// brute force approach - O(n^2)
const arrStartTime = performance.now();

const removeDuplicatesArr = (arr) => {
  const newArr = [];

  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};

console.log(removeDuplicatesArr(hugeDataSet));

const arrEndTime = performance.now();
console.log(`Array Implementation took: ${arrEndTime - arrStartTime}`);

//Set Implementation
//Optimized approach - O(n)
const setStartTime = performance.now();

const removeDuplicatesSet = (arr) => {
  const set = new Set(arr);
  return Array.from(set);
};

console.log(removeDuplicatesSet(hugeDataSet));

const setEndTime = performance.now();
console.log(`Set Implementation took: ${setEndTime - setStartTime}`);
