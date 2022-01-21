
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
   Cuando se declara una variable asignandole directamente un valor, esta pasa a ser global, se crea en el objeto 'global'. En cambio, con var depende

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) { //a = 8, b = 9, c = 10
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function(a, b, c) { // a = 8, b = 9, c = 10
      b = a; // b = 8
      console.log(b); // 8
      b = c; // 10
      var x = 5;
   }
   f(a,b,c); 
   console.log(b); // 9 
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
//var bar;
//baz;
console.log(bar); // undefined
console.log(baz); // no definida
foo(); // 'Hola!'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // 'Franco'
```

```javascript
var instructor = "Tony";
console.log(instructor); // 'Tony'
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // 'Franco'
   }
})();
console.log(instructor); // 'Tony'
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash"; // la pisa
    let pm = "Reverse Flash"; // no pisa
    console.log(instructor); // 'The Flash'
    console.log(pm); // 'Reverse Flash'
}
console.log(instructor); // 'The Flash' // 'Tony'
console.log(pm); // 'Franco'
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"           //-> 2, convierte todo a int
"2" * "3"         //-> // 6, convierte todo a int
4 + 5 + "px"      //-> // '9px', opera 4 + 5 y luego concatena, izq a der
"$" + 4 + 5       //-> // '$45', concatena izq a der
"4" - 2           //-> // 2, convierte todo a número ya que no existe la resta en strings
"4px" - 2         //-> // NaN, no exite la resta en string y no puede realizarse una operación numérica porque el string no es solo un caracter de número
7 / 0             //-> // Infinity, indeterminación
{}[0]             //-> // Undefined, objeto vacío, por lo tanto no existe un elemento en la posición 0
parseInt("09")    //-> // 9, string a int
5 && 2            //-> // 2, siempre tiene precedencia el de la der
2 && 5            //-> // 5, idem
5 || 0            //-> // 5, or con un 0 es la otra cosa
0 || 5            //-> // 5, idem
[3]+[3]-[10]      //-> // NaN, averiguar por qué
3>2>1             //-> // false, 3>2 es true, entonces true>1, false, ya que true es igual a 1
[] == ![]         //-> // True, averiguar por qué
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // Undefined, ya que por el hoisting existe la variable a, pero este le asigna undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // 'Undefined'
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0); 
   console.log(4);
}

printing();
//1 4 3 2
```