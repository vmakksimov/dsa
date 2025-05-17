class Node {
  left: Node | null;
  right: Node | null;
  value: number;
  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  root: Node | null;
  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value: number) {
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    }
    
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
      
    }
    return null
  }
}

const tree = new BinaryTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(180);
tree.insert(15);
tree.insert(1);
console.log(tree);
console.log(tree.lookup(1));
