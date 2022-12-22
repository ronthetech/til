interface Bird {
	flapWings(flaps: number): number
	sing: (song: string) => string
}

let bird: Bird = {
	flapWings: function (flaps: number) {
		return flaps * 2
	},
	sing: (song: string) => `Chirp ${song} Chirp!`,
}
