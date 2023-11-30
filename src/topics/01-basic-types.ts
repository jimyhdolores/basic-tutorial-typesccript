// number, string, boolean, any

//#region NUMBER
console.log('************************');
console.log('********NUMBER**********');
console.log('************************');

const age: number = 31;
let weight = 70.5;

console.log('Edad: ', age);
console.log('Peso: ', weight);

weight = 80;

console.log('Peso Modificado: ', weight);

console.log('****COVERTIR TEXTO A NUMERO**********');

/**
 * Si estás trabajando específicamente con enteros, parseInt es una opción sólida.
 */
const ageText = '31';

console.log('parseInt => ', parseInt(ageText));

/**
 * Si necesitas valores decimales parseFloat es más específico para esa tarea.
 */
const weightText = '70.5';

console.log('parseFloat => ', parseFloat(weightText));

/**
 * Si estás buscando una opción más general que maneje enteros y decimales,
 * el constructor Number puede ser conveniente.
 */
console.log('Number => ', Number(weightText));

/**
 *Validar si un valor de tipo NUMBER es entero o decimal
 */

console.log('Validando si es un número entero usando  la función isInteger => ', Number.isInteger(age));

//#endregion

//#region STRING
console.log('************************');
console.log('********STRING**********');
console.log('************************');

const name: string = 'Jimy';
const lastName = 'Dolores';

console.log('Nombre: ', name);
console.log('Apellidos: ', lastName);

console.log('********* CONCATENACION ********');

const fullName = `${name} ${lastName}`;

console.log('Template Literals (String Interpolation) => ', fullName);
console.log('Operador + => ', name + ' ' + lastName);
console.log('Concat=> ', name.concat(' ').concat(lastName));

//#endregion

//#region BOOLEAN
console.log('************************');
console.log('********BOOLEAN**********');
console.log('************************');

const useAngular: boolean = true;
const comparisonExpression = 5 > 2;

/**
 * Es importante mencionar que en JavaScript, todas las cadenas NO vacías se consideran verdaderas al convertirlas a booleano.
 * Solo las cadenas vacías ("") se consideran falsas.
 */
const booleanText = 'asas';

console.log('Usas Angular?: ', useAngular);
console.log('Comparación mediante una expresión: 5 es mayor que 2? => ', comparisonExpression);
console.log('Convertir texto a boolean usando la función Boolean =>  ', Boolean(booleanText));
console.log('Convertir texto a boolean usando doble negación !! =>  ', !!booleanText);

//#endregion

//#region ANY
console.log('************************');
console.log('********ANY**********');
console.log('************************');

let valueAny: any = 'Hola Coders';

console.log('Valor ANY: ', valueAny);

valueAny = 5;
console.log('Valor ANY número: ', valueAny);

//#endregion

export {};
