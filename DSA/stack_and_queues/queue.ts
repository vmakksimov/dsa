class Node {
  value: number | string;
  next: any;
  constructor(value: number | string) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: any;
  last: any;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value: number | string) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    console.log("this firstttttt", this.first);
    if (!this.first) return undefined;
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = holdingPointer.next;
    this.length--;
    return this;
  }
}

const myStack = new Queue();

myStack.enqueue("udemy");
myStack.enqueue("youtube");
myStack.enqueue("discord");
myStack.enqueue("zero");
myStack.enqueue("fat");
myStack.dequeue();
// console.log(myStack.peek());
console.log("mystack", myStack);
