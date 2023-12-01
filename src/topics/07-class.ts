export class Person {
	name: string;
	lastName: string;
	// si usas la palabra "private" significa que solo se puede usar dentro de la clase
	private age: number;

	constructor(name: string, lastName: string, age: number) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
	}

	walk(): void {
		console.log(`${this.name} esta caminando y tiene ${this.age} años`);
	}

	talk(): void {
		console.log(`${this.name} esta hablando`);
	}
}

// al usar la palabra "new" estamos creando una instancia de la clase
const juan = new Person('Juan', 'Celiz Vega', 15);

console.log('Datos de Juan: ', juan.lastName);
juan.talk();
