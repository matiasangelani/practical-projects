'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if(n === 2) 
    return 2;
  // if(n < 0)
  //   return 'El número ingresado es incorrecto';

  return n * nFactorial(n - 1);
}

nFactorial(3);

// nFactorial(1) = 1 -> se borra del pila ejecución
// nFactorial(2) = 2 * nFactorial(1) = 2 * 1 = 2 -> se borra del pila ejecución
// nFactorial(3) = 3 * nFactorial(2) = 3 * 2 = 6

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if(n === 0) return 0;
  if(n < 3) return 1;
  
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

//nFibonacci(5);


/*---------------Execution stack---------------*/

//fibo(1) = 1
//fibo(3) = fibo(2) + fibo(1) = 1 + 1 = 2
//fibo(2) = 1
//fibo(3) = 2
//fibo(4) = fib(3) + fib(2) = 2 + 1 = 3
//fibo(5) = fib(4) + fib(3) = 3 + 2 = 5
/*---------------------------------------------*/








// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

class Queue {
  constructor() {
      this.element = [];
  }

  enqueue(element) {
      this.element.push(element);
      return this.element.length;
  }

  dequeue() {
      if(!this.element.length) {
          return undefined;
      }

      return this.element.shift();
  }

  size() {
      return this.element.length;
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
