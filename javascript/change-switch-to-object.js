function whoPlaysWhere(val) {
	let answer = ""

	const players = {
		"Steph Curry": "Golden State Warriors",
		"LeBron James": "Los Angeles Lakers",
		"Kevin Durant": "Brooklyn Nets",
		"Giannis Antetokounmpo": "Milwaukee Bucks",
	}

	answer = players[val]
	return answer
}

console.log(whoPlaysWhere("Giannis Antetokounmpo"))
//  returns Milwaukee Bucks

console.log(whoPlaysWhere("Michael Jordan"))
//  returns undefined

function whoPlaysWhereObject(val) {
	return {
		"Steph Curry": "Golden State Warriors",
		"LeBron James": "Los Angeles Lakers",
		"Kevin Durant": "Brooklyn Nets",
		"Giannis Antetokounmpo": "Milwaukee Bucks",
	}[val]
}

console.log(whoPlaysWhereObject("Giannis Antetokounmpo"))
//  returns Milwaukee Bucks

console.log(whoPlaysWhereObject("Michael Jordan"))
//  returns undefined
