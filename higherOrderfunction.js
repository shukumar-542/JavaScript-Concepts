/**
 * Higher order function is a function that take as a argument one or more function and return a function as a result
 *
 *
 */

const radius = [1, 2, 3];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));


