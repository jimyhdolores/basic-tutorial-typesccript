import { ICustomer, showCustomerData } from './utils/customer-util';

const customer: ICustomer = {
	name: 'Dina',
	lastName: 'Boluarte Garcia',
	email: 'dina@gmail.com',
	address: { description: 'Tomas Valle, jr Ayacucho', city: 'Arequipa', country: 'Perú' }
};

showCustomerData(customer);

export {};
