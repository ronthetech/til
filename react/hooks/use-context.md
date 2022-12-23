# How to use React Hook useContext

---

In React, context lets you pass data from a parent component down the component tree to its children components, without having to manually pass props down at each level. The `useContext` hook lets any component in the component tree read and subscribe to context if needed. The component rerenders When the closest parent component with `<YourContext.Provider>` updates, and the context value changes.

```js
import { createContext, useContext } from 'react'

const context = {
  swim:'🏊🏾',
  climb:'🧗🏾',
  bike:'🚴🏿'
}

// creates the context
const YourContext = createContext(context) 

export default function App() {
  return (
    {/* provides the value for the context*/}
    <YourContext.Provider value={context.swim}> 
      <Page />
    </YourContext.Provider>
  )
}

function Page() {
  // lets you read or 'consume' context and subscribe to changes
  const value = useContext(YourContext) 
  
  return (
    <p>
      {value}
    </p>
  )
}
```
