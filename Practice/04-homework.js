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

  remove() {
    if(!this.head) {
      return null;

    }else if(this.__length__ === 1) {
      let removedValue = this.head;
      this.head = null;
      this.__length__--;
      return removedValue.value;

    }
      
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

class HashTable{
  constructor(){
    this.numBuckets = 35;
    this.bucket = [];
  }

  get(value){
    let key = this.hasKey(value);
    return this.bucket[key];
  }

  set(key, value) {
    let position = this.hash(value);
    let obj = {};

    obj[key] = value;
    
    this.bucket[position] = obj;
    return "Set in bucket";
  }

  hasKey() {
    
  }

  hash(string){
    //Calcula la posición donde irá el dato que nos envían
    let sum = 0, key;

    for(let i = 0; i < string.length; i++) {
      sum += string.charCodeAt(i);
    }
    console.log(sum);

    key = sum % this.numBuckets;

    return key;
  }
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
