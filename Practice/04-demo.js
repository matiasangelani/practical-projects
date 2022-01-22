class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.__length__ = 0;
  }

  add(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    }else {
      let currentNode = this.head;

      while(currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.__length__++;
    return "Added node";
  }

  remove() {
    if(!this.head) {
      return null;

    }else if(this.__length__ === 1) {
      let removedValue = this.head;
      this.head = null;
      this.__length__--;
      return removedValue.value;

    }else {
      let currentNode, lastNode, removedValue;

      currentNode = this.head;
      while(currentNode.next !== null) {
        lastNode = currentNode;
        currentNode = currentNode.next;
      }

      removedValue = currentNode.value;
      lastNode.next = null;
      this.__length__--;

      return removedValue;
    }
  }

  search(value) {
		let currentNode;

		currentNode = this.head;
    while(currentNode !== null) {
      if(currentNode.value === value) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
}

let list = new LinkedList();




/*-------------------------------HASH TABLE-------------------------------*/

class hashTable{
  
}










