import { createContext, useContext } from "react"

const context = {
	swim: "🏊🏾",
	climb: "🧗🏾",
	bike: "🚴🏿",
}

// creates the context
const YourContext = createContext(context)

export default function App() {
	return (
		/* provides the value for the context*/
		<YourContext.Provider value={context.swim}>
			<Page />
		</YourContext.Provider>
	)
}

function Page() {
	// lets you read or 'consume' context and subscribe to changes
	const value = useContext(YourContext)

	return <p>{value}</p>
}
