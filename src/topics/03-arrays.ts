// INTERFACES
interface IPet {
	name: string;
	age: string;
	species: string;
	isFemale: boolean;
	vaccines: string[]; // un objecto tambien puede tener atributos de tipo "array" u "objecto"😎
}

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

const petFirulay: IPet = {
	name: 'Firulay',
	age: '15 años',
	species: 'Perro',
	isFemale: false,
	vaccines: ['Rabia']
};

const petKitty: IPet = {
	name: 'Kitty',
	age: '8 años',
	species: 'Gato',
	isFemale: true,
	vaccines: ['Rabia', 'Distemper']
};

const pets: IPet[] = [petFirulay, petKitty];
console.log('Mis mascotas : ', pets);

export {};
