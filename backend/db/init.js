

const {Category, Meta, Product} = require('./models')

const categories = [
  {name: "Household Goods", items: [
    {
      name: "Toothbrush holder",
      description: "hold your tooth brushes",
      price: 80,
      imageUrl: "https://i.imgur.com/mT8XdF3.jpg"
    },

  ]},
  {name: "Construction Materials", items: [
    { 
      name: "Floor Tiles", 
      description: "Beautiful high density plastic floor tiles", 
      price: 20,
      imageUrl: "https://i.imgur.com/2Wp0MNs.jpg"
    },
    {
      name: "Plastic Beams",
      description: "Solid plastic beams for construction or scaffolding",
      price: 150,
      imageUrl: "https://www.kaceyplastics.co.uk/assets/images-panels/beams-800.png"
    },
    {
      name: "Plastic Beams",
      description: "Solid plastic beams for construction or scaffolding",
      price: 150,
      imageUrl: "https://www.wonderlandmodels.com/media/managed/large/i_beams3.jpg"
    },
    {
      name: "Ladder",
      description: "Solid construction",
      price: 500,
      imageUrl: "https://images.homedepot-static.com/productImages/357cf2e2-dedc-4e4b-a827-5d2ad7a25c3c/svn/werner-step-ladders-6204s-64_1000.jpg"
    },
  ]},
  {name: "School Supplies", items: [
    {
      name: "Plastic Bin",
      description: "Store classroom supplies",
      price: 120,
      iamgeUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5C3zCOafzq1uzMzwQSRUAfVPzerY5TpLX6BGNQ5p7ehrDTXw"
    },
    {
      name: "Pencil Case",
      description: "Store classroom supplies",
      price: 40,
      iamgeUrl: "https://i5.walmartimages.com/asr/565d6ab3-9a57-4bb5-ba82-3f6556d882d4_1.81ef282f50d90f673b1f81e2607f0d53.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
    },
    {
      name: "Serving Tray",
      description: "For cafeteria use",
      price: 40,
      iamgeUrl: "https://image.made-in-china.com/2f0j00dZOQSvMzETbt/Skidproof-Plastic-Service-Tray.jpg"
    },
    {
      name: "Clipboards",
      description: "Self explanatory",
      price: 60,
      iamgeUrl: "https://sc01.alicdn.com/kf/HTB19k4qSFXXXXaSaFXXq6xXFXXXn/A4-Size-Transparent-Plastic-Clipboards-With-Low.jpg_350x350.jpg"
    },
  ]},
  {name: "3D Printer Fillament", items: [
    {
      name: "ABS 0.5mm 1.2KG",
      description: "Recycled ABS fillament",
      price: 2300,
      iamgeUrl: "https://cdn.shopify.com/s/files/1/0778/8857/products/Blue-ABS-Clean-cropped_large.jpg?v=1442137414"
    },
    {
      name: "Clear PET 0.5mm 1.2kg",
      description: "Recycled PET fillament",
      price: 1800,
      iamgeUrl: "https://cdn.shopify.com/s/files/1/2104/4351/products/pet-0301.png?v=1501010720"
    },
    {
      name: "Green PET 0.5mm 1.2kg",
      description: "Recycled PET fillament",
      price: 1800,
      imageUrl: "http://3dprintingindustry.com/wp-content/uploads/2014/08/PET_filament-3dpi-png.png"
    },
    {
      name: "Blue PET 0.5mm 1.2kg",
      description: "Recycled PET fillament",
      price: 1800,
      iamgeUrl: "https://cdn.shopify.com/s/files/1/1869/6613/products/PETG_transparent.jpg?v=1493185533"
    },
  ]},
  {name: "Raw Plastic", items: [
    {
      name: "PET clear, shredded",
      description: "Processed clear PET for manufacturing",
      type: 'auction',
      iamgeUrl: "http://www.hiwtc.com/photo/products/11/00/01/105.jpg"
    },
    {
      name: "PET green, shredded",
      description: "Processed green PET for manufacturing",
      type: 'auction',
      iamgeUrl: "https://sc02.alicdn.com/kf/HTB1jtY0KVXXXXaPaXXXq6xXFXXXu/Shredded-PET-from-bottled-water-and-plastic.jpg_220x220.jpg"
    },
    {
      name: "ABS",
      description: "Recycled ABS from multiple sources",
      type: 'auction',
      iamgeUrl: "http://www.recicladoplastico.com.ar/wp-content/uploads/2016/07/plastico-inyeccion.jpg"
    },
  ]},
  {name: "Art", items: [
    {
      name: "Nylon Vase",
      description: "Designer vase",
      type: 'single',
      iamgeUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURKlZvThRqftNPXokcV5IjEn7iMp0j_ysYfTtnDrHvQoz8L8F9Q"
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