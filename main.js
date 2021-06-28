import { filter, forEach, map, mapWith, reduce, intersect, union } from "./callbacks/myarray.js"

const a = [1, 2, 4]
forEach(a, console.log)

const b = map(a, n => n + 2)
console.log(b)

const c = mapWith(a, n => n + 2)
console.log(c)


const d = filter(a, n => n !== 2)
console.log(d)

const e = reduce(a, (x, y) => x + y, 0)
console.log(e)

console.log(
  intersect([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));