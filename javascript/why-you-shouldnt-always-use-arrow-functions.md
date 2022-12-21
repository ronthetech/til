# Why You Shouldn't Always Use Arrow Functions

---

ES6 introduced arrow functions to the JavaScript ecosystem. Though they are a powerful feature, you shouldn't get carried away when implementing ES6 arrow functions. They don't allow the same or expected use of the `this` keyword. In a regular function you can use `this` to refer to:

```js
var bird = {
  species: "dove",
  color:"white",
  identify: function(){
    return `${this.color} ${this.species}`
  }
}

console.log(bird.identify()) // white dove
```

However, in ES6 arrow functions, `this` refers to the global object.

```js
var bird = {
  species: "dove",
  color:"white",
    identify: function(){
    return `${this.color} ${this.species}`
  },
  getIdentity: () => {
    return `${this.color} ${this.species}`
  }
}

console.log(bird.identify()) // white dove
console.log(bird.getIdentity()) // undefined undefined
```

[example](./why-you-shouldnt-always-use-arrow-functions.js)
[link]()
