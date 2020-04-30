type Admin = {
    name: string;
    privilidges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const emp: ElevatedEmployee = {
    name: 'Tanjiro',
    privilidges: ['Demon Slayer', 'Loving brother'],
    startDate: new Date()
}

// Type Guards
type UnknownEmployee = Admin | Employee;

function printEmployee(emp: UnknownEmployee) {
    console.log('Name: ', emp.name);
    if ('privilidges' in emp) console.log('Privilidges: ', emp.privilidges);
    if ('startDate' in emp) console.log('Start Date: ', emp.startDate);
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

type vehicle = Truck | Bike;
function printVehicle(vehicle: vehicle) {
    vehicle.drive(); 
    if (vehicle instanceof Truck) vehicle.load();
}

const v1 = new Bike();
const v2 = new Truck();
printVehicle(v1);
console.log('=============');
printVehicle(v2);

// Index Properties 
interface ErrorContainer {
    [prop: string]: string;
}

const errorLoaders: ErrorContainer = {
    email: 'Not an email provided',
    username: 'Not a valid username'
}