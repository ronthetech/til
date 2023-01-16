function chainToSwitch(val) {
	let answer = ""

	if (val === "hip hip") {
		answer = "hooray!"
	} else if (val === 7) {
		answer = "Ate 9"
	} else if (val === "Michael") {
		answer = "Jackson"
	} else {
		answer = "Not this time!"
	}

	return answer
}

console.log(chainToSwitch("hip hip"))
console.log(chainToSwitch(0))

function switchedChain(val) {
	let answer = ""

	switch (val) {
		case "hip hip":
			answer = "hooray!"
			break
		case 7:
			answer = "Ate 9"
			break
		case "Michael":
			answer = "Jackson"
			break
		default:
			answer = "Not this time!"
			break
	}

	return answer
}

console.log(switchedChain("hip hip"))
console.log(switchedChain(0))
