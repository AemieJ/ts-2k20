"use strict";
// Rest Params
const add = (...numbers) => {
    return numbers.reduce((currRes, currVal) => {
        return currRes + currVal;
    }, 0);
};
console.log(add(5, 10, 15, 3.8));
