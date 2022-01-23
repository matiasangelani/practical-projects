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

  remove(value) {
    let currentNode, removedNode, lastNode;

    currentNode = this.head;
    lastNode = this.head;

    if(!this.head){
      return null;

    }else if(!this.head.next) {
      removedNode = this.head;
      this.head = null;
      this.__length__--;
      return removedNode.value;

    }else if(typeof value === 'string') {
      while(currentNode.value !== value) {
          lastNode = currentNode;
          currentNode = currentNode.next;
      }

    }else if(typeof value === 'number') {
      if(value < 0){
        value *= -1;
      }
      if(value >= this.__length__) {
        return "Index greater or equal than length (" + this.__length__ + ")";
      }

      for(let i = 0; i < value; i++) {
        lastNode = currentNode;
        currentNode = currentNode.next;
      }

    }else {
      currentNode = this.head;
      while(currentNode.next !== null) {
        lastNode = currentNode;
        currentNode = currentNode.next;
      }
    }

    lastNode.next = currentNode.next;
    removedNode = currentNode;
    this.__length__--;
    return removedNode.value;
  }

  search(value) {
    let currentNode;

    if(typeof value === 'string') {
      currentNode = this.head;
      while(currentNode !== null) {
        if(currentNode.value === value) {
          return currentNode.value;
        }
      currentNode = currentNode.next;
      }

    }else if(typeof value === 'function') {
      currentNode = this.head;
      while(currentNode !== null) {
        if(value(currentNode.value)) {
          return currentNode.value;
        }
        currentNode = currentNode.next;
      }
    }
    return null;
  }
}



/*------------------------------HASH TABLE------------------------------*/

class HashTable {
  constructor(){
    this.numBuckets = 35;
    this.bucket = [];
  }

  hash(key) {
    let sum = 0;

    for(let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    key = sum % this.numBuckets;

    return key;
  }

  set(key, value) {
    let position, keyValue = {};

    if(typeof key !== 'string') {
      throw TypeError('Keys must be strings');
    }

    keyValue.key = key;
    keyValue.value = value;

    position = this.hash(key);

    if(this.bucket[position]) {
      for(let i = 0; i < this.bucket[position].length; i++) {
        if(this.bucket[position][i].key === key){
          this.bucket[position][i].value = value;
          break;
        }
      }
      this.bucket[position].push(keyValue);

    }else {
      this.bucket[position] = [];
      this.bucket[position].push(keyValue);
    }

  }

  get(key) {
    let position = this.hash(key);

    if(!this.bucket[position]) {
      return false;
    }

    for(let i = 0; i < this.bucket[position].length; i++) {      
      if(this.bucket[position][i].key === key) {
        return this.bucket[position][i].value;
      }
    }

    return false;
  }

  hasKey(key) {
    if(this.get(key)) return true;
    return false;
  }
}