"use strict";
class Department {
    constructor(id, n) {
        this.employee = []; //privatized to the methods within the class and to the class inherited from base class
        this.name = n;
        this.id = id;
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    // ABSTRACT METHOD
    describe() {
        console.log('IT DEPARTMENT');
    }
}
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounts');
        this.reports = [];
        this.reports = [...reports];
        this.lastReport = reports[reports.length - 1];
    }
    // As the private variable lastReport ain't accessible from outside the class, using get it can be accessed
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error('No report has been created');
    }
    // Set is another method to set the value
    set mostRecentReport(report) {
        if (!report)
            throw new Error('Enter a valid value');
        this.addReport(report);
    }
    // ABSTRACT METHOD
    describe() {
        console.log('ACCOUNTS DEPARTMENT');
    }
    // Overriding method of base class 'addEmployee' 
    addEmployee(employee) {
        if (employee === 'Touka')
            return;
        else
            this.employee.push(employee);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReport() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Tanjiro']);
it.describe();
it.addEmployee('Tanjiro');
it.addEmployee('Nezuko');
it.printEmployeeInfo();
console.log('============');
console.log(it);
/*
Here, this corresponds to the deptCopy and hence this.name doesn't exist and
results in undefined however once we assign this method to an instance of class then
the following code results in an error

const deptCopy = {describe: dept.describe };
deptCopy.describe();
*/
const accounts = new AccountDepartment('d2', ['Initial Report']);
accounts.mostRecentReport; // Using getter 
accounts.describe();
accounts.addEmployee('Touka');
accounts.addEmployee('Kaneki');
accounts.addReport('Characters from Tokyo Ghoul');
accounts.mostRecentReport = 'Favorite characters'; // Using setter
accounts.printReport();
console.log(`Recent report: ${accounts.mostRecentReport}`);
console.log('============');
console.log(accounts);
/*
ABSTRACT CLASSES
In some cases, you want to force some methods to be overrideen by the dervied classes from the base class. Hence, you make the base class abstract and
the method to be overriden as abstract which makes it a compulsion for the derviced classes to use this methods with their custom requirements.
*/ 
