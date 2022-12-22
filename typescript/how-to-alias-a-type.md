# How to Alias a Type

---

In TypeScript you can create a new name or `type alias` for any type that already exists.

```ts
// type alias naming an object type
type MyLocation = {
  longitude: number;
  latitude: number;
}

function getCoordinates(geo: MyLocation) {
  console.log(
		`The longitude is ${geo.longitude} and the latitude is ${geo.latitude}.`,
	)
}

getCoordinates({ longitude: 203, latitude:759 })

// type alias naming a union type
type AlphaNumeric = string | number;

let id: AlphaNumeric = 32;
```

[link](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
