'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order"
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order"
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.__length__ = 1;
  }
  
  insert(value) {
    let newTree = new BinarySearchTree(value);

    this.__length__++;
    if(newTree.value <= this.value) { // Manda a la izquierda
      if(this.left === null) {
        this.left = newTree;
      }else {
        this.left.insert(value);
      }
      
    }else { // Manda a la derecha
      if(this.right === null) {
        this.right = newTree;
      }else {
        this.right.insert(value);
      }
    }

    return "Added tree";
  }

  contains(value) {

    if(this.value === value) {
      return true;
    }else if(value < this.value) {
      if(!this.left){
        return false;
      }else{
        return this.left.contains(value);
      }
    }else {
      if(!this.right){
        return false;
      }else{
        return this.right.contains(value);
      }
    }
  }

  depthFirstForEach(cb = null, path) {
    if(!path || path === "in-order") {
      if(this.left !== null) {
        this.left.depthFirstForEach(cb, path);
      }
      cb(this.value);
      if(this.right !== null) {
        this.right.depthFirstForEach(cb, path);
      }

    }else if(path === "pre-order") {
      cb(this.value);
      if(this.left !== null) {
        this.left.depthFirstForEach(cb, path);
      }
      if(this.right !== null) {
        this.right.depthFirstForEach(cb, path);
      }

    }else if(path === "post-order") {
      if(this.left !== null) {
        this.left.depthFirstForEach(cb, path);
      }
      if(this.right !== null) {
        this.right.depthFirstForEach(cb, path);
      }
      cb(this.value);

    }else {
      return "Incorrect search path";
    }
  }

  breadthFirstForEach() {

  }

  size() {
    return this.__length__;
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
