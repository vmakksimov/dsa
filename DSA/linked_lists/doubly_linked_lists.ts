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

type Node = {
  value: number;
  next: Node | null;
  prev?: Node | null;
};

class DoublyLinkedList {
  head: Node;
  tail: Node;
  length: number;
  constructor(value: number) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value: number) {
    const newNode: Node = {
      value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value: number) {
    const newNode = {
      value: value,
      next: this.head,
      prev: null,
    };
    this.head.prev = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode: Node | null = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index: number, value: number) {
    console.log("this head", this.head);
    const newNode: Node | null = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    if (!leader || !leader.next) return undefined;
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.prev = leader;
    follower.prev = newNode;

    return this.printList();
  }

  traverseToIndex(index: number) {
    let count = 0;
    let currentNode: Node | null = this.head;
    while (count !== index && currentNode) {
      currentNode = currentNode.next;
      console.log("current next", currentNode);
      count++;
    }
    return currentNode;
  }

  remove(index: number) {
    const leader = this.traverseToIndex(index - 1);
    if (!leader || !leader.next) return undefined;
    let nodeToRemove = leader.next;
    let nextPointer = nodeToRemove.next;
    leader.next = nextPointer;
    this.length--;
    return this.printList();
  }
}

const myLinkedListNew = new DoublyLinkedList(10);
myLinkedListNew.append(5);
myLinkedListNew.append(16);
myLinkedListNew.prepend(1);
myLinkedListNew.prepend(2);
myLinkedListNew.insert(3, 30);
myLinkedListNew.remove(3);
console.log(myLinkedListNew);
console.log(myLinkedListNew.printList());
console.log("hahaha 2", myLinkedList);
