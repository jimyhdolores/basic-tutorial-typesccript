/**
 * Puedes usar los "Generic" en funciones, clases e interfaces
 */

import { ICustomer } from './utils/customer-util';

// METODOS

const getFirstItem = <T>(array: T[]): T | undefined => {
	return array.length > 0 ? array[0] : undefined;
};

const firstNumber = getFirstItem([1, 2, 3]);
const firstString = getFirstItem(['a', 'b', 'c']);

console.log('firstNumber: ', firstNumber); // Output: 1
console.log('firstString: ', firstString); // Output: "a"

// INTERFACES

/**
 *Es comun que los Request y Response de las APIs tenga una estructura definida por la empresa
{
  "code": "INFO001",
  "message": "Sin errores al procesar",
  "data": {
    "name": "Juan",
    "lastName": "Sosa Vega"
  }
}

{
  "code": "INFO001",
  "message": "Sin errores al procesar",
  "data": [
    {
      "name": "Juan",
      "lastName": "Sosa Vega"
    },
    {
      "name": "Vanessa",
      "lastName": "Campos Torres"
    }
  ]
}
 
{
  "code": "INFO001",
  "message": "Sin errores al procesar",
  "data": true
}

 */

interface IResponse<T> {
	code: string;
	message: string;
	data: T;
}

const customer: ICustomer = {
	name: 'Dina',
	lastName: 'Boluarte Garcia',
	email: 'dina@gmail.com',
	address: { description: 'Tomas Valle, jr Ayacucho', city: 'Arequipa', country: 'Perú' }
};

const responseObject: IResponse<ICustomer> = { code: 'INFO001', message: 'Sin errores al procesar', data: customer };

const responseArray: IResponse<ICustomer[]> = {
	code: 'INFO001',
	message: 'Sin errores al procesar',
	data: [customer, customer]
};

const responseOther: IResponse<boolean> = { code: 'INFO001', message: 'Sin errores al procesar', data: false };

console.log('Response Object: ', responseObject);
console.log('Response Array: ', responseArray);
console.log('Response Other: ', responseOther);

export {};
