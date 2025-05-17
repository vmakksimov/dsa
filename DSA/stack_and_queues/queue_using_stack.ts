class Stack {
  data: any[];
  constructor() {
    this.data = new Array();
  }

  peek() {
    return this.data[0];
  }

  push(value: number | string) {
    this.data.push(value);
    return this;
  }

  pop() {
    const deletedElement = this.data[0];
    this.data.splice(0, 1);
    return deletedElement;
    
  }

  empty(){
    return this.data.length === 0;
  }
}

const queue = new Stack();
queue.push("udemy");
queue.push("youtube");
queue.push("discord");
queue.push("zero");
queue.push("fat");
// console.log(queue.peek());
console.log(queue.pop());
console.log(queue.empty())

console.log("mystack", queue);
