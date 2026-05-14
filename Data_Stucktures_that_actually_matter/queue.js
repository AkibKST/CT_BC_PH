//* Queue
//* A queue is a linear data structure that follows the First In First Out (FIFO) principle. It is used to store a collection of elements, where the first element added to the queue is the first one to be removed. The main operations of a queue are enqueue (to add an element), dequeue (to remove an element), and peek (to view the front element without removing it).

class Queue {
  //* The constructor initializes an empty array to hold the items in the queue.
  constructor() {
    this.items = [];
  }

  //* The enqueue method adds a new element to the rear of the queue. {O(1)}
  enqueue(value) {
    return this.items.push(value);
  }

  //* The dequeue method removes and returns the front element of the queue. If the queue is empty, it returns undefined. {O(1)}
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.shift();
  }

  //* The peek method returns the front element of the queue without removing it. If the queue is empty, it returns undefined. {O(1)}
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  //* The isEmpty method checks if the queue is empty by verifying if the length of the items array is zero. {O(1)}
  isEmpty() {
    return this.items.length === 0;
  }

  //* The print method displays the elements in the queue from front to back. It creates a copy of the items array and joins the elements with " -> " for better visualization. {O(n)}
  print() {
    console.log(this.items.join(" -> "));
  }
}

const queue = new Queue();

console.log(queue.peek());
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(30);
queue.enqueue(60);

queue.print();
console.log(queue.peek());
console.log(queue.dequeue());