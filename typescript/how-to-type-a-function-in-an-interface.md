# How to Type a Function in an Interface

---

In TypeScript you can type a function in two ways.

```ts
interface Bird {
  flapWings(flaps: number): number;
  sing: (song: string) => string;
}

let bird: Bird = {
  flapWings: function (flaps: number) {
    return flaps * 2
  },
  sing: (song: string) => `Chirp ${song} Chirp!`
}
```

[example](./how-to-type-a-function-in-an-interface.ts)
[link](https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function)
