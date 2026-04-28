//** Scenario Based Activity - Grouping Data */

// Scenario: Count every survey  and group by response
//?Input:
const surveyResponses = ["A", "B", "A", "C", "B", "A", "C", "B", "A", "C", "D"];

//TODO: initiate empty object
//TODO: Check if the response is already exists or not
//TODO: If it exists then increment the count
//TODO: If not the initialize it with 1

const count = surveyResponses.reduce((table, response) => {
  //   //? Check if the response is already exists or not
  //   if (table[response]) {
  //     //? If it exists then increment the count
  //     table[response] = table[response] + 1;
  //   } else {
  //     //? If not the initialize it with 1
  //     table[response] = 1;
  //   }

  //? One line solution
  table[response] = (table[response] || 0) + 1;

  //? Return the table for the next iteration
  return table;
}, {});

console.log(count);

//?Output:
// {A: 4, B: 3, C: 3, D: 1}
