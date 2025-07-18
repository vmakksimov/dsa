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
  
    remove(value: number) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while (currentNode) {
        if (value < currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!
  
          //Option 1: No right child:
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              //if parent > current value, make current left child a child of parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
  
                //if parent < current value, make left child a right child of parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
  
            //Option 2: Right child which doesnt have a left child
          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if (parentNode === null) {
              this.root = currentNode.right;
            } else {
              //if parent > current, make right child of the left the parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
  
                //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
  
            //Option 3: Right child that has a left child
          } else {
            //find the Right child's left most child
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while (leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
  
            //Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;
  
            if (parentNode === null) {
              this.root = leftmost;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
          return true;
        }
      }
    }

    breadthFirstSearch() {
      let currentNode = this.root;
      let list = [];
      let queue = [];
      queue.push(currentNode);
  
      while (queue.length > 0) {
        currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
      return list;
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
  console.log(tree.breadthFirstSearch())
  