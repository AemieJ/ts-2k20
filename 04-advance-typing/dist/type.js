"use strict";
const emp = {
    name: 'Tanjiro',
    privilidges: ['Demon Slayer', 'Loving brother'],
    startDate: new Date()
};
function printEmployee(emp) {
    console.log('Name: ', emp.name);
    if ('privilidges' in emp)
        console.log('Privilidges: ', emp.privilidges);
    if ('startDate' in emp)
        console.log('Start Date: ', emp.startDate);
}
printEmployee(emp);
// Type Guards with classes
class Bike {
    drive() {
        console.log('Driving Bike!');
    }
}
class Truck {
    drive() {
        console.log('Driving Truck!');
    }
    load() {
        console.log('Packing Weights');
    }
}
function printVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.load();
}
const v1 = new Bike();
const v2 = new Truck();
printVehicle(v1);
console.log('=============');
printVehicle(v2);
