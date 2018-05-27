

const {Category, Meta} = require('./models')

const categories = [
  {name: "Household Goods"},
  {name: "Construction Materials"},
  {name: "School Supplies"},
  {name: "3D Printer Fillament"},
  {name: "Raw Plastic"},
  {name: "Art"}
]

module.exports = async function initDB() {
  const meta = await Meta.findOne();
  if (meta && meta.seeded)
    return; 
  
  await Promise.all(
    categories
    .map((category) => new Category(category))
    .map(category => category.save())
  )

  const saveMeta = new Meta({seeded: true})
  await saveMeta.save()

  return;  
}