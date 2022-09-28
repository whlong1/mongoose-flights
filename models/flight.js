import mongoose from 'mongoose'


const ticketSchema = new mongoose.Schema({
	seat: {
		type: String,
		match: /[A-F][1-9]\d?/
	},
	price: {
		type: Number,
		min: 0
	}
}, { timestamps: true })


const flightSchema = new mongoose.Schema({
	airline: {
		type: String,
		enum: ['American', 'Southwest', 'United'],
	},
	airport: {
		type: String,
		enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
		default: 'DEN'
	},
	flightNo: { type: Number, min: 10, max: 9999, required: true },
	departs: {
		type: Date,
		default: function () {
			// A. new Date object set to time of creation
			const today = new Date() // output: 2021-10-29T12:07:43.072Z
			// B. look at year and add 1 
			const oneYearFromNow = today.getFullYear() + 1 // output: => 2022
			// C. Update OG obj year
			today.setFullYear(oneYearFromNow) // output: => 2022-10-29T12:13:04.759Z
			return today
		},
	},
	tickets: [ticketSchema],
	meals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }]
}, { timestamps: true })

const Flight = mongoose.model('Flight', flightSchema)

export {
	Flight
}