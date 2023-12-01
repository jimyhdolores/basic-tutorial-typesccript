export interface ICustomer {
	name: string;
	lastName: string;
	email: string;
	address: {
		description: string;
		city: string;
		country: string;
	};
}

export const showCustomerData = (customer: ICustomer): void => {
	console.log('****************************');
	console.log('*****DATOS DEL CLIENTE******');
	console.log('****************************');

	const {
		name,
		lastName,
		email,
		address: { description, city, country }
	} = customer;

	console.log('Nombre: ', name);
	console.log('Apellidos: ', lastName);
	console.log('Email: ', email);

	console.log('----DIRECCIÓN ----');

	console.log('Dirección: ', description);
	console.log('Cudad: ', city);
	console.log('País: ', country);
};
