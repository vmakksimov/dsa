// let myLinkedList = {
//     head: {
//       value: 10,
//       next: {
//         value: 5,
//         next: {
//           value: 16,
//           next: null
//         }
//       }
//     }
//   }
  
  class MyLinkedList {
    head: Record<string, any>;
    tail: Record<string, any>;
    length: number
    constructor(value: number){
      this.head = {
        value: value,
        next: null
      }
      this.tail = this.head;
      this.length = 1;
    }

    append(value: number){
        const newNode = {
            value,
            next: null
        }
        this.tail.next = newNode;
        
        this.tail = newNode;
        this.length++;
    }
    prepend(value: number){
        const newNode = {
            value,
            next: this.head
        }
        this.head = newNode;

        this.length++;
    }

    insert(index: number, value: number){
        for (let i = 1; i < this.length; i++){
            const currentNode = this.head;
            
        }
    }
  }

  const myLinkedList = new MyLinkedList(10)
console.log('my linked listtt', myLinkedList)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log('after append 6', myLinkedList)