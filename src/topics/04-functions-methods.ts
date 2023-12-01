// METODOS
console.log('*****************************');
console.log('*********METHODS***********');
console.log('*****************************');

function showMessage() {
	console.log('Hello Coders!');
}

const greet = (name: string): void => {
	console.log(`Hola ${name}`);
};

showMessage();
greet('Julio');

console.log('*****************************');
console.log('*********FUNCTIONS***********');
console.log('*****************************');

function sum(a: number, b: number) {
	return a + b;
}

const sum2 = (a: number, b: number) => {
	return a + b;
};

console.log('1) Suma de números: ', sum(5, 6));
console.log('2) Suma de números: ', sum2(10, 6));

// En caso que los metodos o funciones requieran multiples parametros lo ideal es pasar todo por un objecto

// Esto es una mala practica❌
const showStudentData = (
	name: string,
	lastName: string,
	age: number,
	career: string,
	university: string,
	cycle: number
) => {
	console.log('****Los datos del Estudiante son los siguientes:***');
	console.log('Nombre: ', name);
	console.log('Apellidos: ', lastName);
	console.log('Edad: ', age);
	console.log('Carrera: ', career);
	console.log('Universidad: ', university);
	console.log('Ciclo actual: ', cycle);
};

showStudentData('Ernesto', 'Torres Ugarte', 25, 'Bellas Artes', 'Universidad Catolica del Peru', 5);

interface IPerson {
	name: string;
	lastName: string;
	age: number;
}

interface IStudent extends IPerson {
	career: string;
	university: string;
	cycle?: number; // con el operador '?' indicamos que un atributo del objecto es opcional
}

// Lo ideal es crear un objeto y pasar todos los valores que necesitemos ✅
const showStudentData2 = (data: IStudent) => {
	console.log('****Los datos del Estudiante son los siguientes:***');
	console.log('Nombre: ', data.name);
	console.log('Apellidos: ', data.lastName);
	console.log('Edad: ', data.age);
	console.log('Carrera: ', data.career);
	console.log('Universidad: ', data.university);
	console.log('Ciclo actual: ', data.cycle);
};

const studentPercy: IStudent = {
	name: 'Percy',
	lastName: 'Garcia Mori',
	age: 24,
	career: 'Ingienería Informática',
	university: 'Universidad Mayor de San Marcos',
	cycle: 5
};

showStudentData2(studentPercy);

export {};
