import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
	},
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema)


export {
	Movie
}