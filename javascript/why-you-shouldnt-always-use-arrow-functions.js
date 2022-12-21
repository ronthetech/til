var bird = {
	species: "dove",
	color: "white",
	identify: function () {
		return `${this.color} ${this.species}`
	},
	getIdentity: () => {
		return `${this.color} ${this.species}`
	},
}

console.log(bird.identify())
console.log(bird.getIdentity())
