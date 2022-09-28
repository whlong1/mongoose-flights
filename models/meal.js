import mongoose from 'mongoose'

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
}, { timestamps: true })

const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal,
}
