import { IAction } from './utils/actions.interface';

export class Person {
	// No es necesario poner la palabra public para que se entienda que un atributo o metodo sea "publico"
	name: string;
	public lastName: string;
	// si usas la palabra "private" sobre una variable, función o metodo significa que solo sera accesible desde la misma clase
	private _age: number;
	// si usas la palabra "protected" sobre una variable, función o metodo significa que solo sera accesible desde la misma clase y las clases quienes hereden de ella
	protected _fullName: string;

	constructor(name: string, lastName: string, age: number) {
		this.name = name;
		this.lastName = lastName;
		this._age = age;
		this._fullName = `${this.name} ${this.lastName}`;
	}

	walk(): void {
		console.log(`${this.name} esta caminando y tiene ${this._age} años`);
	}

	talk(): void {
		console.log(`${this.name} esta hablando: "Naci en el año ${this._yearBirth()}" `);
	}

	// Función privada para calcular el año de nacimiento
	private _yearBirth() {
		const currentDate = new Date();
		const yearBirth = currentDate.getFullYear() - this._age;
		return yearBirth;
	}
}

const juan = new Person('Juan', 'Celiz Vega', 31);
console.log('Instancia (Person) "JUAN": ', juan);
juan.walk();
juan.talk();

export class Astronauta extends Person implements IAction {
	numberMastersDegrees: number;

	constructor(name: string, lastName: string, age: number, numberMastersDegrees: number) {
		// super es una palabra reserva que indica que se tiene que implementar el constructor de la clase extendida
		super(name, lastName, age);
		this.numberMastersDegrees = numberMastersDegrees;
	}

	pilotShip(): void {
		console.log(`${this.name} Tiene permiso para pilotear la nave🚀`);
	}

	canBeAstronaut() {
		return this.numberMastersDegrees > 0;
	}

	getFullName(): string {
		return this._fullName;
	}
}
console.log('*****************************************');
console.log('****DATOS DEL POSTULANTE A ASTRONAUTA****');
console.log('*****************************************');

const astronauta = new Astronauta('Jhon', 'Connor', 45, 0);
console.log('Datos del Astronauta', astronauta);
console.log('Nombres y Apellidos del Astronauta', astronauta.getFullName());
console.log('Puede ser astronauta?', astronauta.canBeAstronaut());

astronauta.pilotShip();
