let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

class MyLinkedList {
  head: Record<string, any>;
  tail: Record<string, any>;
  length: number;
  constructor(value: number) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value: number) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value: number) {
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index: number, value: number) {
    console.log("this head", this.head);
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const previousPointer = leader.next;
    leader.next = newNode;
    newNode.next = previousPointer;
    return this.printList();
  }

  traverseToIndex(index: number) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      console.log("current next", currentNode);
      count++;
    }
    return currentNode;
  }

  remove(index: number) {
    const leader = this.traverseToIndex(index - 1);
    let nodeToRemove = leader.next;
    let nextPointer = nodeToRemove.next;
    leader.next = nextPointer;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) return undefined;
    let first = this.head;
    this.head = this.tail;
    this.tail = first;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = first.next;
      first.next = prev;
      prev = first;
      first = next;
    }
    return this.printList();
  }
}

const myLinkedListNew = new MyLinkedList(10);
myLinkedListNew.append(5);
myLinkedListNew.append(16);
myLinkedListNew.prepend(1);
myLinkedListNew.prepend(2);
myLinkedListNew.insert(3, 30);
console.log(myLinkedListNew);
console.log(myLinkedListNew.printList());
console.log(myLinkedListNew.reverse());
console.log([2, 1, 10, 30, 5, 16].reverse());
