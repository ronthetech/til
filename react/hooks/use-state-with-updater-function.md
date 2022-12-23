# How to use React Hook useState With an Updater Function

---

The `useState` hook lets you add state variables to your components. You can use an updater function if you need to calculate the next state using the previous state.

```js
import { useState } from "react"

export default function Page() {
	const [count, setCount] = useState(0)

	function incrementFive() {
		// updater function - uses the pending state to calculate the next state
		setCount(c => c + 1)
		setCount(c => c + 1)
		setCount(c => c + 1)
		setCount(c => c + 1)
		setCount(c => c + 1)
	}
	function increment() {
		// you can name the pending state argument however you like, using the first letter of the state variable is just a convention
		setCount(prevCount => prevCount + 1)
	}
	function decrement() {
		// no updater function - changes the state directly
		setCount(count - 1)
	}
	function decrementFive() {
		// no updater function - this wont work because setting state doesn't update the current state, it triggers a rerender with the new state
		setCount(count - 1)
		setCount(count - 1)
		setCount(count - 1)
		setCount(count - 1)
		setCount(count - 1)
	}

	return (
		<div>
			<button onClick={incrementFive}>+5</button>
			<button onClick={increment}>+1</button>
			{count}
			<button onClick={decrement}>-1</button>
			{/* without updater function, this wont work */}
			<button onClick={decrementFive}>-5</button>
		</div>
	)
}
```

[example](./examples/use-state-with-updater-function)
[link](https://reactjs.org/docs/hooks-state.html)
[link](https://reactjs.org/docs/hooks-reference.html#usestate)
[link](https://beta.reactjs.org/apis/react/useState)
