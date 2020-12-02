const faker = require('faker');

export function artist () { 
    return {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        age: getRndNum(20, 50),
        country: faker.address.country(),
        publishYear: getRndNum(1990, 2020)
    }  
}

function getRndNum (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}