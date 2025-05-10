class Node {
  value: number | string;
  next: any;
  constructor(value: number | string) {
    this.value = value;
    this.next = null;
  }
}


class Stack {
  top: any;
  bottom: any;
  length: number;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }



  push(value: number | string) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;

    return this;
  }

  pop() {

    if (!this.top) {
      return null;
    }
    const temp = this.top;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return temp;
  }


}

const myStack = new Stack();


myStack.push("udemy");
myStack.push("youtube");
myStack.push("discord");
// myStack.pop()
myStack.push("zero");
console.log(myStack.peek());
console.log("mystack", myStack);
