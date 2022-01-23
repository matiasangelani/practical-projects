'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

// function LinkedList() {

// }

// function Node(value){

// }

/*Método ES6*/

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



// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

// function HashTable() {

// }

/*Método ES6*/

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



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
