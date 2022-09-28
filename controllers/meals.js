import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  Meal.find({}, function (err, meals) {
    res.render("meals/new", {
      meals: meals,
      err: req.query.error
    })
  })
}

function create(req, res) {
  Meal.findOne({ name: req.body.name })
    .then((meal) => {
      if (meal) {
        res.render('error', { message: 'Duplicate'})
      } else {
        Meal.create(req.body).then(() => res.redirect('/meals/new'))
      }
    })
  
  // Meal.create(req.body)
  //   .then(() => res.redirect('/meals/new'))
  //   .catch((error) => {
  //     console.log('******************')
  //     // Meal.find({}, function (err, meals) {
  //     //   res.render("meals/new", {
  //     //     meals: meals,
  //     //     err: error
  //     //   })
  //     // })
  //     res.render('error', { error: error, message: 'Duplicate'})
  //   })
}


export {
  newMeal as new,
  create
}

