// INTERFACES
interface IPet {
	name: string;
	age: string;
	species: string;
	isFemale: boolean;
}

interface IPlanet {
	name: string;
	galaxy: string;
	numberOfMoons: number;
}

// OBJECTS
const planet: IPlanet = {
	name: 'Tierra',
	galaxy: 'Vía Láctea',
	numberOfMoons: 1
};

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

console.log('Datos del planeta Tierra: ', planet);
console.log('Datos de mi mascota Firulay: ', petFirulay);
console.log('Datos de mi mascota Kitty: ', petKitty);

petFirulay.species = 'Lobo';
console.log('Datos actualizado de mi mascota: ', petFirulay);

// ARRAYS

export {};
