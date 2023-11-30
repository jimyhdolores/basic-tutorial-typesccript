// INTERFACES
interface IPerson {
	name: string;
	lastName: string;
	age: number;
}

interface IStudent extends IPerson {
	career: string;
	university: string;
}

// OBJECTS
const vilma = {
	name: 'Vilma',
	lastName: 'Bravo Torres',
	age: 54
};

const juan: IPerson = {
	name: 'Juan',
	lastName: 'Soto Perez',
	age: 42
};

const maria: IPerson = {
	name: 'Maria',
	lastName: 'De Souza',
	age: 42
};

const studentPercy: IStudent = {
	name: 'Percy',
	lastName: 'Garcia Mori',
	age: 24,
	career: 'Ingienería Informática',
	university: 'Universidad Mayor de San Marcos'
};

console.log('Datos de Vilma: ', vilma);
console.log('Datos de Juan: ', juan);
console.log('Datos de Maria: ', maria);

maria.age = 28;
console.log('Datos actualizados de Maria: ', maria);

console.log('Datos del estudiante Percy: ', studentPercy);

export {};
