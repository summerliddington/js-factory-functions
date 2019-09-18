// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const doctorInfo = (name, specialty, address) => {
    return {
        "name": name, 
        "specialty": specialty, 
        "address": address
    }
}
console.log(doctorInfo("Dr. Doctor", "Health", "102 Nashville Drive"))

const petObject = (name, breed) => {
    return {
        "name": name,
        "breed": breed,
    }
}

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels
const bowWowKennels = []

const ajax = petObject("Ajax", "Pit Bull")
const penny = petObject("Penny", "mut")
const marley = petObject("Marley", "fluff ball")

bowWowKennels.push(ajax, penny, marley)

console.table("Pet Crew", bowWowKennels)

// Practice: Music Row

const jumpStop = []
const chatten = []
const polar = []

const createFunk = (name, age, type) => {
    return {
        "name": name,
        "age": age, 
        "type": type,
    }
}
const createRap = (name, age, type) => {
    return {
        "name": name,
        "age": age, 
        "type": type,
    }
}
const createCountry = (name, age, type) => {
    return {
        "name": name,
        "age": age, 
        "type": type,
    }
}
const createBluegrass = (name, age, type) => {
    return {
        "name": name,
        "age": age, 
        "type": type,
    }
}
const createPop = (name, age, type) => {
    return {
        "name": name,
        "age": age, 
        "type": type,
    }
}

jumpStop.push(createFunk("Dre Funkz", 25, "Funk")),
jumpStop.push(createRap("Dusta Grimes", 21, "Rap"),("Loyonce Branis", 27, "Rap")),
chatten.push(createCountry("Bruce Atikins", 23, "Country"),("Avilee", 19, "Country")),
chatten.push(createBluegrass("Bart Danielson", 23, "Bluegrass")),
polar.push(createPop("Jensen Brown", 20, "Pop"),("Austin Kinkaid", 27, "Pop"))

console.log(chatten)