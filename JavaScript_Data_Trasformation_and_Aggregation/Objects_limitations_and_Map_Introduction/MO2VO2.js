//*Learn 2-2  The Core Transformation Toolkit (map, filter, sort, slice)

// create 30 fake data for response which have each object have 6 properties: id , productName, category, price, rating, stock
const rawApiData = [
  {
    id: "es-001",
    productName: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    rating: 4.5,
    stock: 100,
  },
  {
    id: "es-002",
    productName: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    rating: 4.8,
    stock: 50,
  },
  {
    id: "es-003",
    productName: "The Art of Code",
    category: "Books",
    price: 29.99,
    rating: 4.7,
    stock: 200,
  },
  {
    id: "es-004",
    productName: "Gaming Laptop",
    category: "Electronics",
    price: 999.99,
    rating: 4.6,
    stock: 20,
  },
  {
    id: "es-005",
    productName: "Yoga Mat",
    category: "Sports",
    price: 24.99,
    rating: 4.3,
    stock: 150,
  },
  {
    id: "es-006",
    productName: "Noise Cancelling Headphones",
    category: "Electronics",
    price: 149.99,
    rating: 4.7,
    stock: 80,
  },
  {
    id: "es-007",
    productName: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 19.99,
    rating: 4.4,
    stock: 300,
  },
  {
    id: "es-008",
    productName: "Bluetooth Speaker",
    category: "Electronics",
    price: 89.99,
    rating: 4.5,
    stock: 120,
  },
  {
    id: "es-009",
    productName: "Running Shoes",
    category: "Sports",
    price: 79.99,
    rating: 4.6,
    stock: 60,
  },
  {
    id: "es-010",
    productName: "Electric Toothbrush",
    category: "Personal Care",
    price: 49.99,
    rating: 4.7,
    stock: 90,
  },
  {
    id: "es-011",
    productName: "4K Ultra HD TV",
    category: "Electronics",
    price: 499.99,
    rating: 4.8,
    stock: 30,
  },
  {
    id: "es-012",
    productName: "Fitness Tracker",
    category: "Electronics",
    price: 99.99,
    rating: 4.5,
    stock: 70,
  },
];

//*show the top rated two products name from all the products in the rawApiData depending on rating by using map, filter, sort, slice
//? Output: [{name: "Fitness Tracker"}, {name: "Smart Watch"}]

//* Process
//TODO Filter => Electronics
//TODO Sort by => rating
//TODO Slice => first 2 (top 2)
//TODO Map => transform object shape to {name: "Product name"}

//** Filter the products to include only those in the "Electronics" category
const topElectronicsProducts = rawApiData
  .filter((product) => product.category === "Electronics") //** Filter the products to include only those in the "Electronics" category;
  .sort((a, b) => b.rating - a.rating) //** Sort the filtered products by rating in descending order;
  .slice(0, 2) //** Slice the sorted array to get the top 2 products;
  .map((product) => ({ name: product.productName })); //** Map the sliced array to transform each product object to a new shape containing only the product name;

//** Log the final array of top-rated electronics products to the console
console.log(topElectronicsProducts);
