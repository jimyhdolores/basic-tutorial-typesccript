console.log('*****************************');
console.log('*********OBJECTS***********');
console.log('*****************************');

interface ICustomer {
	name: string;
	lastName: string;
	email: string;
	address: {
		description: string;
		city: string;
		country: string;
	};
}

const customer: ICustomer = {
	name: 'Melani',
	lastName: 'Figueroa Santos',
	email: 'mfigueroa@gmail.com',
	address: { description: 'Av. Juan Lecaros 128', city: 'Lima', country: 'Perú' }
};

const {
	name,
	lastName,
	address: { city }
} = customer;
console.log('Nombre: ', name);
console.log('Apellidos: ', lastName);
console.log('Ciudad: ', city);

console.log('*****************************');
console.log('*********ARRAYS***********');
console.log('*****************************');

const pokemons: string[] = ['Pikachu', 'Charizard'];
console.log('Pokemon 2: ', pokemons[1]);

const [poke1, poke2] = pokemons;
console.log('Pokemon 1: ', poke1);
console.log('Pokemon 2: ', poke2);

const [, , poke3 = 'No existe el pokemon'] = pokemons;
console.log('Pokemon 3: ', poke3);

export {};
