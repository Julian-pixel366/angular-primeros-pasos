// este codigo esta en javascript lo primero seria definir el array 
const numbers = [4, 6, 9, -3, 5, 8];

// luego crear unas variables en este caso en constantes
//para hallar el minimo y el maximo valor utilizando el metodo math
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

// Se suman los valores por medio de las constantes y se guardan 
// se guardan en una constante llanmada suma 
const suma = minNumber + maxNumber;

// luego imprimimos el resultado si queremos el valor minimo
console.log("El valor mínimo es:", minNumber);
// si queremos el valor maximo 
console.log("El valor máximo es:", maxNumber);
// si queremos la suma de los valores 
console.log("La suma del valor mínimo y máximo es:", suma);