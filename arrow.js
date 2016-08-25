// function getAdder(a) {
//   return function(b) {
//     return a + b;
//   }
// }

const getAdder = a => b => a + b;

const addOne = getAdder(1);
console.log(addOne(5));
console.log(addOne(7));

// function getErrorFormatter(prefix, suffix) {
//   return function(error) {
//     return `${prefix}${error.message}${suffix}`;
//   };
// }

const getErrorFormatter = (prefix, suffix) => error => `${prefix}${error.message}${suffix}`;

const foo = getErrorFormatter('foo <', '>');
console.log(foo(new Error('what')));
