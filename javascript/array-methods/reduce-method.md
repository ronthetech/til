# How to Use the Reduce Method

---

In JavaScript, the `.reduce()` method allows you to "reduce" an array to a single value. You provide a "reducer" callback function that executes on every element in an array in order, where the return value from the results of the calculations on the previous element are passed in on the next run.

```js
const points = [54, 46, 30, 35, 42]

const total = points.reduce((x,y) => x + y)

console.log(total)

/// 207
```

[example](./reduce-method-example.js)
[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
