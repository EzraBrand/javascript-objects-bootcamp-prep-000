// let meals = {
//   breakfast: 'avocado',
//   lunch: 'avocado',
//   dinner: 'avocado'
// }
//
// meals.snack = 'yogurt'
//
// meals['second breakfast'] = 'bagel'
//
// meals.breakfast = 'cereal'
//
// console.log(meals)

// let sweetMeal = 'dessert'
//
// meals[sweetMeal] = 'cake';
//
// meals.dessert
// meals[sweetMeal]

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
  obj[key] = value

  return obj
}

let recipe = {eggs: 3}

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

Object.assign ({}, {foo: 'bar'})

Object.assign({eggs: 3}, {flour: '1 cup'})

Object.assign({eggs: 3}, {chocolate: '1 cup', flour: '2 cups'}, {flour: '1/2 cup'})

console.log(recipe)
