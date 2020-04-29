// Rest Params
const add = (...numbers: number[]) => {
    return numbers.reduce((currRes: number, currVal: number) => {
        return currRes + currVal;
    }, 0);
};

console.log(add(5, 10, 15, 3.8));