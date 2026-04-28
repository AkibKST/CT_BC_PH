//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//TODO: Init empty obj
//TODO: init obj category
//TODO: Calculate the revenue

const totalSalesByCategory = sales.reduce((table, sale) => {
  console.log(table, " : ", sale);

  //? Destructure the sale object to get category, price, and quantity
  const { category, price, quantity } = sale;

  //? Check if the category already exists in the table, if not initialize it
  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  //? Increment the item count for the category
  table[category].totalRevenue += price * quantity;

  //? Increment the item count for the category
  table[category].itemCount += quantity;

  //? Return the table for the next iteration
  return table;
}, {});

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };
