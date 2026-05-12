//* Stack
//* A stack is a linear data structure that follows the Last In First Out (LIFO) principle. It is used to store a collection of elements, where the last element added to the stack is the first one to be removed. The main operations of a stack are push (to add an element), pop (to remove an element), and peek (to view the top element without removing it).

class Stack {
  //* The constructor initializes an empty array to hold the items in the stack.
  constructor() {
    this.items = [];
  }

  //* The push method adds a new element to the top of the stack. {O(1)}
  push(value) {
    return this.items.push(value);
  }

  //* The pop method removes and returns the top element of the stack. If the stack is empty, it returns undefined. {O(1)}
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.pop();
  }

  //* The peek method returns the top element of the stack without removing it. If the stack is empty, it returns undefined. {O(1)}
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  //* The isEmpty method checks if the stack is empty by verifying if the length of the items array is zero. {O(1)}
  isEmpty() {
    return this.items.length === 0;
  }

  //* The print method displays the elements in the stack from top to bottom. It creates a copy of the items array, reverses it, and joins the elements with " -> " for better visualization. {O(n)}
  print() {
    console.log(this.items.slice().reverse().join(" -> "));
  }
}

const stack = new Stack();

console.log(stack.peek());
console.log(stack.isEmpty());

stack.push(10);
stack.push(30);
stack.push(60);

stack.print();
console.log(stack.peek());
console.log(stack.pop());
