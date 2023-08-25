var moment = require("moment");
var mathjs = require("mathjs");

console.log("General Kenobi, you are a bold one.");
var datetime = moment().format("MMM Do YY");
console.log(datetime);
console.log(mathjs.evaluate("12 / (2.3 + 0.7)"));

var name = "Wedge";
var time = "in two days";
console.log(`Hello ${name}, how are you ${time}?`);

// let fibonacci = {
//   [Symbol.iterator]() {
//     let pre = 0,
//       cur = 1;
//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur];
//         return { done: false, value: cur };
//       },
//     };
//   },
// };

// for (var n of fibonacci) {
//   // truncate the sequence at 1000
//   if (n > 1000) break;
//   console.log(n);
// }
