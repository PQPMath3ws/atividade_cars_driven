import { Cars } from ".prisma/client";

import { getPrismaClient } from "../config/database";

async function getCars():Promise<Cars[]> {
	const cars = await getPrismaClient().cars.findMany();
	return cars;
}

async function getCar(id: number):Promise<Cars> {
	const car = await getPrismaClient().cars.findUnique({
		where: {
			id
		}
	});
	return car;
}

async function getCarWithLicensePlate(licensePlate: string):Promise<Cars> {
	const car = await getPrismaClient().cars.findUnique({
		where: {
			licensePlate
		}
	});
	return car;
}

async function createCar(model: string, licensePlate: string, year: number, color: string):Promise<void> {
	await getPrismaClient().cars.create({
		data: {
			model,
			licensePlate,
			year,
			color
		}
	});
}

async function deleteCar(id: number) {
	await getPrismaClient().cars.delete({
		where: {
			id
		}
	});
}

const carRepository = {
	getCar,
	getCarWithLicensePlate,
	getCars,
	createCar,
	deleteCar
}

export default carRepository;