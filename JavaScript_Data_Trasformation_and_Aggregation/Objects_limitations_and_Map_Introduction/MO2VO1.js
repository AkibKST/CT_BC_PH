// Objects limitations and Map Introduction

const obj = {
  nextLevel: {
    courseId: "Level2",
  },

  "Programming Hero": {
    courseId: "Level1",
  },
};

// console.log(obj);

const course1 = { name: "Programming Hero" };
const course2 = { name: " Next Level Web Development" };

const map = new Map();

map.set(false, "Programming Hero");
map.set(course1, { courseId: "level1" });
map.set(course2, { courseId: "level2" });

// console.log(map);
//Map(3) {
//   false => 'Programming Hero',
//   { name: 'Programming Hero' } => { courseId: 'level1' },
//   { name: ' Next Level Web Development' } => { courseId: 'level2' }
// }

// map.size; //3
// map.clear(); // clear all the data from the map
// map.delete(course1); // delete a specific data from the map
// map.has(course1); // check if a specific data exists in the map or not
// map.get(course1); // get the value of a specific key from the map

// Iterating over a map
map.forEach((value, key) => {
  // console.log("Key:", key, "Value:", value);
});

/**
 * Output:
 *
 *  Key: false Value: Programming Hero
    Key: { name: 'Programming Hero' } Value: { courseId: 'level1' }
    Key: { name: ' Next Level Web Development' } Value: { courseId: 'level2' }
*/

// Modifying the keys in the map
map.forEach((value, key) => {
  key.name = "Sohoz ,Sorol, Simple, " + key.name;
});

// console.log(map);

/**Map(3) {
  false => 'Programming Hero',
  { name: 'Sohoz ,Sorol, Simple, Programming Hero' } => { courseId: 'level1' },
  { name: 'Sohoz ,Sorol, Simple,  Next Level Web Development' } => { courseId: 'level2' }*/

// Getting the values of the map
// console.log([...map.values()]);

// Getting the keys of the map
// console.log([...map.keys()]);

// Modifying the keys of the map using for...of loop
for (let key of map.keys()) {
  key.name = "Sohoz ,Sorol, Simple, " + key.name;
}
//entries() method returns an iterator object that contains the key-value pairs for each element in the map. The entries are returned in the same order as they were inserted into the map.
console.log(map.entries());
/**
 * 
 * [Map Entries] {
  [ false, 'Programming Hero' ],
  [
    {
    name: 'Sohoz ,Sorol, Simple, Sohoz ,Sorol, Simple, Programming Hero'
  },
    { courseId: 'level1' }
  ],
  [
    {
    name: 'Sohoz ,Sorol, Simple, Sohoz ,Sorol, Simple,  Next Level Web Development'
  },
    { courseId: 'level2' }
  ]
}
*/

// Creating a map from an array of arrays where each inner array contains a key-value pair
const courses = [
  ["Programming Hero", "Level1"],
  ["Next Level Web Development", "Level2"],
];

const map2 = new Map(courses);

console.log(map2);
/**
 * Map(2) {
  'Programming Hero' => 'Level1',
  'Next Level Web Development' => 'Level2'
}
*/
