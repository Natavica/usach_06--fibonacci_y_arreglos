// Generar la secuencia de Fibonacci entre 0 y 1000
//La sucesión de Fibonacci se trata de una serie infinita de números naturales que empieza con un 0 y un 1 y continúa añadiendo números que son la suma de los dos anteriores.
//El 1 se obtiene sumando  0 + 1= 1   /  el 2 se calcula sumando 1+1  /  análogamente, el 3 es 1+2  /   el 5 es 2+3    ¡Y sigue!

// Limite para la secuencia
const limite = 1000;
function generarFibonacci(limite) {
    let fib = [0, 1]; // Inicializamos los primeros dos números de la secuencia
    let siguiente = fib[0] + fib[1]; //Calculamos el tercer número como la suma de los dos primeros

    while (siguiente <= limite) { //Usamos este ciclo porque no sabemos de antemano cuántos números habrá antes de llegar al límite.
        fib.push(siguiente);// Se agrega el sigliente número de la lista
        siguiente = fib[fib.length - 1] + fib[fib.length - 2];  // Después de agregar el número, recalculamos el siguiente como la suma de los dos últimos números de la lista
    }

    return fib;
}

// Filtrar números pares de una lista
function filtrarPares(lista) {
    return lista.filter(num => num % 2 === 0);//La condición es que el número sea divisible entre 2 
}

// Filtrar números impares de una lista
function filtrarImpares(lista) {
    return lista.filter(num => num % 2 !== 0);
}

// Generamos la secuencia de Fibonacci
const fibonacci = generarFibonacci(limite);

console.log("Secuencia de Fibonacci entre 0 y 1000:");
console.log(fibonacci);

console.log("Números pares en la secuencia de Fibonacci:");
console.log(filtrarPares(fibonacci));

console.log("Números impares en la secuencia de Fibonacci:");
console.log(filtrarImpares(fibonacci));

// filter: Es una manera sencilla y eficiente de filtrar listas según una condición.
// Funciones modulares: Dividimos el problema en partes más pequeñas y manejables (generar la secuencia, filtrar pares e impares).

// 1. Generación de la Secuencia de Fibonacci
// Función generarFibonacci(limite):
// Entrada: Recibe un número entero limite que define el valor máximo para la secuencia.
// Proceso:
// Se inicializa un arreglo fib con los primeros dos números de la secuencia de Fibonacci: [0, 1].
// Se establece una variable siguiente que representa el siguiente número en la secuencia, inicializada como la suma de los dos primeros números (fib[0] + fib[1]).
// Se utiliza un bucle while que continúa mientras siguiente sea menor o igual que limite. En cada iteración, el número siguiente se agrega al arreglo fib, y luego se recalcula como la suma de los dos últimos números de la secuencia (fib[fib.length - 1] + fib[fib.length - 2]).
// Salida: Devuelve el arreglo fib que contiene todos los números de la secuencia de Fibonacci que no exceden el valor limite.
// 2. Filtrado de Números Pares
// Función filtrarPares(lista):
// Entrada: Recibe un arreglo lista que contiene números enteros.
// Proceso:
// Utiliza el método filter() de los arreglos, que itera sobre cada elemento de la lista y evalúa la condición definida en la función de devolución de llamada. En este caso, la condición es que el número sea divisible entre 2 (num % 2 === 0), es decir, que sea par.
// Salida: Devuelve un nuevo arreglo que contiene solo los números pares de la lista original.
// 3. Filtrado de Números Impares
// Función filtrarImpares(lista):
// Entrada: Similar a la función anterior, recibe un arreglo lista que contiene números enteros.
// Proceso:
// Utiliza el método filter() para iterar sobre los elementos del arreglo y aplicar la condición num % 2 !== 0, que identifica a los números impares (aquellos que no son divisibles entre 2).
// Salida: Devuelve un nuevo arreglo que contiene solo los números impares de la lista original.
// 4. Ejecución y Salida en Consola
// Se define una constante limite = 1000, que actúa como el valor máximo para la secuencia de Fibonacci.
// La función generarFibonacci(limite) es llamada para obtener todos los números de Fibonacci hasta 1000.
// Luego, las funciones filtrarPares(fibonacci) y filtrarImpares(fibonacci) son invocadas para obtener los números pares e impares, respectivamente, dentro de la secuencia generada.
// Se imprime la secuencia completa, seguida de las secuencias de números pares e impares usando console.log().
// Términos Técnicos Relevantes
// Secuencia de Fibonacci: Es una sucesión matemática en la que cada número es la suma de los dos anteriores. Comienza con los números 0 y 1, y la secuencia sigue infinitamente.

// Bucle while: Un bucle que ejecuta un bloque de código repetidamente mientras se cumpla una condición. En este caso, el bucle continúa mientras el número de Fibonacci siguiente no sea mayor que 1000.

// Método filter(): Es un método de los arreglos en JavaScript que devuelve un nuevo arreglo con todos los elementos que pasan una condición definida en una función de devolución de llamada. En este caso, se usa para filtrar los números pares e impares.

// Condición num % 2 === 0: Esta expresión verifica si un número es divisible entre 2, es decir, si es par.

// Condición num % 2 !== 0: Esta expresión verifica si un número no es divisible entre 2, es decir, si es impar.

