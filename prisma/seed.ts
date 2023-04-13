import { PrismaClient } from "@prisma/client";

(async function():Promise<void> {
    const prismaClient:PrismaClient = new PrismaClient();

    let cars = await prismaClient.cars.findFirst();

    if (cars) return;

    try {
        await prismaClient.cars.createMany({
            data: [
                {
                    model: "HB20",
                    licensePlate: "ABC9090",
                    year: 2001,
                    color: "AZUL"
                },
                {
                    model: "SONATA",
                    licensePlate: "EZD3035",
                    year: 2010,
                    color: "PRETO"
                },
                {
                    model: "X1",
                    licensePlate: "FBI2231",
                    year: 2018,
                    color: "BRANCO"
                },
                {
                    model: "CIVIC",
                    licensePlate: "LPA1019",
                    year: 2021,
                    color: "CINZA"
                },
                {
                    model: "ONIX",
                    licensePlate: "HFA2713",
                    year: 2023,
                    color: "AMARELO"
                },
                {
                    model: "EVOLUTION",
                    licensePlate: "EPR6655",
                    year: 2005,
                    color: "CINZA"
                },
                {
                    model: "UNO",
                    licensePlate: "DMP7935",
                    year: 2000,
                    color: "PRETO"
                },
                {
                    model: "320i",
                    licensePlate: "LAS5546",
                    year: 2017,
                    color: "BRANCO"
                },
            ],
        });

        console.log("Seed realizado com sucesso!");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
    await prismaClient.$disconnect();
})();