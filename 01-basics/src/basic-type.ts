function addNumbers(n1: number, n2: number, ifTrue: boolean, phrase: string) {
    const result = n1 + n2;
    if (ifTrue) console.log(phrase + result);
    else return result;
}

const n1 = 5;
const n2 = 2.8;
const ifTrue = true;
const phrase = "Result is: "
const result = addNumbers(n1, n2, ifTrue, phrase);
console.log(phrase + result);