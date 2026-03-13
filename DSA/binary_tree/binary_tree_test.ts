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


  insert(value: number){
    const newNode = new Node(value);
    if (!this.root){
        this.root = newNode;
        return;
    }
    let currentNode = this.root;
    while (true){
        if (value > currentNode.value){
            if (!currentNode.right){
                currentNode.right = newNode;
                return this;
            }
            currentNode = currentNode.right
        }

        if (value < currentNode.value){
            if (!currentNode.left){
                currentNode.left = newNode
                return this
            }
            currentNode = currentNode.left
        }
    }
  }
  lookup(value: number){
    if (!this.root){
        return null
    }

    let currentNode = this.root;
    while (true){
        if (currentNode.value === value){
            return true;
        }

        if (value > currentNode.value){
            if (!currentNode.right){
                return false;
            }
            currentNode = currentNode.right
        } else if (value < currentNode.value) {
             if (!currentNode.left){
                return false;
            }
            currentNode = currentNode.left
            
        } else {
            return false
        }
    }
   
  }
}

//     9
//  4    20
// 1 6 15 170

const tree = new BinaryTree();
tree.insert(9)
tree.insert(20)
tree.insert(170)
tree.insert(4)
tree.insert(1)
tree.insert(15)
tree.insert(6)
tree.insert(180)
console.log(tree.lookup(180))
console.log("tree", tree)
