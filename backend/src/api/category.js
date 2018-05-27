
const { Category } = require('../../db/models')
exports.getCategories = function(req, res, next) {
  Category.find()
    .then(categories => {
      res.status(200).send(categories)
      next()
    })
}

exports.createCategory = function(req, res, next) {
  const category = new Category({
    name: req.body.name,
    description: req.body.description
  })

  category.save()
    .then((data) => {
      res.status(200).send(data)
    })
  
}