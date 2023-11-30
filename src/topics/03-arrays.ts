// INTERFACES
interface IPet {
	name: string;
	age: string;
	species: string;
	isFemale: boolean;
}

const petFirulay: IPet = {
	name: 'Firulay',
	age: '15 años',
	species: 'Perro',
	isFemale: false
};

const petKitty: IPet = {
	name: 'Kitty',
	age: '8 años',
	species: 'Gato',
	isFemale: true
};

/**
 * Si no defines un tipo de dato al array este tomara los "tipos" segun los valores que contenga
 */
const elements = [1, 15, 80, true, ''];

console.log('Elementos: ', elements);

/**
 * Array con definición de tipo
 */
const messages: string[] = ['Hello ', 'Coders'];
console.log('Messages: ', messages);

// array de objectos
const pets: IPet[] = [petFirulay, petKitty];
console.log('Planetas: ', pets);

export {};
