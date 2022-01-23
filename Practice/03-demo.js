class Queue {
    constructor() {
        this.element = [];
    }

    enqueue(element) {
        this.element.push(element);
        return this.element.length;
    }

    dequeue() {
        return this.element.shift();
    }

    size() {
        return this.element.length;
    }
}

let banco = new Queue();
let hola = new Array;

console.log(banco.enqueue(5));
console.log(banco.enqueue(3));
console.log(banco);

console.log(banco.size());
console.log(banco.dequeue());
console.log(banco.dequeue());
console.log(banco.dequeue());
console.log(banco.size());

hola.push();

// console.log(array.enqueue(4));
// console.log(array.enqueue(2));
// console.log(array.enqueue(7));
// console.log(array);
// console.log(array.size());
// console.log(array.dequeue());
// console.log(array);
// array.dequeue();
// array.dequeue();
// console.log(array.dequeue());
// console.log(array);



