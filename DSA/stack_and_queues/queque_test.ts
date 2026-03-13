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
    if (!this.first){
        this.first = newNode;
        this.last = newNode;
        this.length++;
        return;
    }
    const temp = this.first;
    this.first = newNode;
    temp.next = newNode;
    this.length++;
    return;
  }

  dequeue() {
    if (!this.last){
        return null;
    }
    const next = this.last.next;
    this.last = next;
    this.length--;
    return;
  }
}

// udemy
// youtube
// discord
// zero

const myStack = new Queue();

myStack.enqueue("udemy");
myStack.enqueue("youtube");
myStack.enqueue("discord");
myStack.enqueue("zero");
myStack.enqueue("fat");
myStack.dequeue();
console.log(myStack.peek());
console.log("mystack", myStack);
