class Node {
    value: number | string;
    next: any;
    constructor(value: number | string) {
      this.value = value;
      this.next = null;
    }
  }
  
  class ArrayStack {
    data: any[];
    constructor() {
      this.data = new Array();
    }
  
    push(value: number | string) {
        this.data.push(value);
    }
  
    pop() {
        return this.data.pop();
    }
  }
  
  class Stack {
    data: any[];
    constructor() {
        this.data = new Array();
    }
  
    peek() {
      return this.data[this.data.length - 1];
    }
  
  
  
    push(value: number | string) {
      this.data.push(value);
      return this;
    }
  
    pop() {
     return this.data.pop();
    }
  
  
  }
  
  const myStack = new Stack();
  
  
  myStack.push("udemy");
  myStack.push("youtube");
  myStack.push("discord");
  myStack.push("zero");
  myStack.pop()
  console.log(myStack.peek());
  console.log("mystack", myStack);
  