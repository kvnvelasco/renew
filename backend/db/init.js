

const {Category, Meta, Product} = require('./models')

const categories = [
  {name: "Household Goods", items: [
    {
      name: "Toothbrush holder",
      description: "hold your tooth brushes",
      price: 80
    },

  ]},
  {name: "Construction Materials", items: [
    { 
      name: "Floor Tiles", 
      description: "Beautiful high density plastic floor tiles", 
      price: 20
    },
    {
      name: "Plastic Beams",
      description: "Solid plastic beams for construction or scaffolding",
      price: 150,
    },
    {
      name: "Plastic Beams",
      description: "Solid plastic beams for construction or scaffolding",
      price: 150,
    },
    {
      name: "Ladder",
      description: "Solid construction",
      price: 500,
    },
  ]},
  {name: "School Supplies", items: [
    {
      name: "Plastic Bin",
      description: "Store classroom supplies",
      price: 120,
    },
    {
      name: "Pencil Case",
      description: "Store classroom supplies",
      price: 40,
    },
    {
      name: "Serving Tray",
      description: "For cafeteria use",
      price: 40,
    },
    {
      name: "Clipboards",
      description: "Self explanatory",
      price: 60,
    },
  ]},
  {name: "3D Printer Fillament", items: [
    {
      name: "ABS 0.5mm 1.2KG",
      description: "Recycled ABS fillament",
      price: 2300,
    },
    {
      name: "Clear PET 0.5mm 1.2kg",
      description: "Recycled PET fillament",
      price: 1800,
    },
    {
      name: "Green PET 0.5mm 1.2kg",
      description: "Recycled PET fillament",
      price: 1800,
    },
    {
      name: "Blue PET 0.5mm 1.2kg",
      description: "Recycled PET fillament",
      price: 1800,
    },
  ]},
  {name: "Raw Plastic", items: [
    {
      name: "PET clear, shredded",
      description: "Processed clear PET for manufacturing",
      type: 'auction'
    },
    {
      name: "PET green, shredded",
      description: "Processed green PET for manufacturing",
      type: 'auction'
    },
    {
      name: "ABS",
      description: "Recycled ABS from multiple sources",
      type: 'auction'
    },
  ]},
  {name: "Art", items: [
    {
      name: "Nylon Vase",
      description: "Designer vase",
      type: 'single'
    },
  ]}
]

module.exports = async function initDB() {
  const meta = await Meta.findOne();
  // if (meta && meta.seeded)
  //   return; 
  
  await Promise.all(
    categories
    .map(category =>  {
      const cat = new Category({ name: category.name })
      return cat.save()
        .then(saved => {
          return category.items.map(item => ({
            ...item,
            category: saved._id
          }))
        })
        .then(mapped => {
          return Promise.all(mapped.map(item => new Product(item)).map(product => product.save()))
        })
    }
        
    )
    
  )

  const saveMeta = new Meta({seeded: true})
  await saveMeta.save()

  return;  
}