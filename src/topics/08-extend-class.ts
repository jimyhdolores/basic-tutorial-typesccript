import { Person } from './07-class';

class Astronauta extends Person {
	numberMastersDegrees: number;

	constructor(name: string, lastName: string, age: number, numberMastersDegrees: number) {
		// super es una palabra reserva que indica que se tiene que implementar el constructor de la clase extendida
		super(name, lastName, age);
		this.numberMastersDegrees = numberMastersDegrees;
	}

	canBeAstronaut() {
		return this.numberMastersDegrees > 0;
	}
}

console.log('****DATOS DEL POSTULANTE A ASTRONAUTA****');
const astronauta = new Astronauta('Jhon', 'Connor', 45, 0);
console.log(astronauta);
console.log('Puede ser astronauta?', astronauta.canBeAstronaut());
