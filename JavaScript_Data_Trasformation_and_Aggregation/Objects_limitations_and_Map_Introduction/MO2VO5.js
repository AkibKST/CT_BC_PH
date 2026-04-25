//**  From Simple Totals to Powerful Aggregation (reduce) */

//Count subtotal

const cartItems = [
  { id: "es-001", name: "Espresso", price: 3.0, quantity: 2 },
  { id: "la-001", name: "Latte", price: 4.5, quantity: 1 },
  { id: "ca-001", name: "Cappuccino", price: 4.0, quantity: 3 },
];

// calculate subtotal
const subtotal = cartItems.reduce((subtotalAccumulator, item) => {
  console.log(subtotalAccumulator, item);
  return subtotalAccumulator + item.price * item.quantity;
}, 0);

console.log(subtotal);

//Find best scorer

const players = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 95 },
  { name: "Eve", score: 88 },
];

const bestScorer = players.reduce((bestPlayer, player) => {
  console.log(bestPlayer, player);
  if (bestPlayer.score > player.score) {
    return bestPlayer;
  }

  return player;
}, players[0]);

console.log(bestScorer);

/**{ name: 'Alice', score: 85 } { name: 'Alice', score: 85 }
{ name: 'Alice', score: 85 } { name: 'Bob', score: 92 }
{ name: 'Bob', score: 92 } { name: 'Charlie', score: 78 }
{ name: 'Bob', score: 92 } { name: 'Diana', score: 95 }
{ name: 'Diana', score: 95 } { name: 'Eve', score: 88 }
{ name: 'Diana', score: 95 }**/
