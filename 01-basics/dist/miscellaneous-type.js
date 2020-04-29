"use strict";
// UNKNOWN AND NEVER TYPE
// *Unkown type is not as flexible as the any type
let random;
random = 5;
random = 'Amy';
let newString;
// newString = random; results in an error 'cause random is unknown type and we need to keep track of random type
if (typeof random === 'string') {
    newString = random;
}
// *Never type is not same as void and doesn't return undefined on console.log and will halt the entire code
function generateError(message, code) {
    throw { message: message, code: code };
}
console.log(generateError('Error Occured.', 500));
