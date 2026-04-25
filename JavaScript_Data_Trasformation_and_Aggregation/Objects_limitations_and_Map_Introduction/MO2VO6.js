//** The Common Pattern - Normalizing using lookup table */

// Generate a lookup table
//? Input
const postsArray = [
  { id: "es-001", title: "Intro to SQL", author: "Alice" },
  { id: "la-001", title: "Advanced JavaScript", author: "Bob" },
  { id: "ca-001", title: "Data Structures in Python", author: "Charlie" },
];

const lookupTable = postsArray.reduce((table, post) => {
  table[post.id] = post;
  return table;
}, {});

// console.log(lookupTable);

//? Output
/**  {
 *  "es-001": { id: "es-001", title: "Intro to SQL", author: "Alice" },
    "la-001": { id: "la-001", title: "Advanced JavaScript", author: "Bob" },
    "ca-001": { id: "ca-001", title: "Data Structures in Python", author: "Charlie" },
}
    */

const post = lookupTable["es-001"];

//? Accessing posts using the lookup table
for (let post in lookupTable) {
  console.log(lookupTable[post]);
}

//? Accessing a specific post
console.log(post);
