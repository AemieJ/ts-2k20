"use strict";
// UNION AND LITERAL TYPE
function combine(n1, n2, type // literal type to force conversion
) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || type === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
const combineNumbers = combine(5, 6, 'as-number');
const combineStringAsNumbers = combine('5', '6', 'as-number');
const combineString = combine('Aemie', 'Jariwala', 'as-text');
console.log(combineNumbers);
console.log(combineStringAsNumbers);
console.log(combineString);
