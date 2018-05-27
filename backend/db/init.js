

const { Category, Meta, Product } = require('./models')

const categories = [
  {
    name: "Household Goods", items: [
      {
        name: "Toothbrush holder",
        description: "hold your tooth brushes",
        price: 80,
        imageUrl: "https://i.imgur.com/mT8XdF3.jpg"
      },
      {
        name: "Plastic Chair",
        description: "Decorative piece for you home",
        price: 100,
        imageUrl: "https://4.imimg.com/data4/DP/XI/MY-18325580/varmora-ergo-chair-500x500.jpg"
      },
      {
        name: "Broom",
        description: "Cleaning utilities for your home.",
        price: 120,
        imageUrl: "https://5.imimg.com/data5/SF/YV/MY-33039804/plastic-broomstick-500x500.jpg"
      },
      {
        name: "Plates",
        description: "Disposable plates",
        price: 80,
        imageUrl: "http://www.americanwholesalers.us/wp-content/uploads/2016/10/PL005001.jpg"
      },
      {
        name: "Cabinet",
        description: "Storage for clothes and things alike",
        price: 90,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEee6t5Gnf3darwdxqvQsGMNGM4zBDBr4xDVhFnDHPJXjlktO7"
      },
      {
        name: "Kitchenware",
        description: "Complpete dining set, that is tottaly disposable",
        price: 200,
        imageUrl: "https://thumbs.dreamstime.com/b/disposable-bright-plastic-kitchenware-stacked-white-colourful-tableware-isolated-background-55424879.jpg"
      }, {
        name: "Water Jugs",
        description: "Water jugs that could store up to 2L",
        price: 300,
        imageUrl: "http://www.dynastyplastic.com/images/plastic-jugs-k-1530.jpg"
      }, {
        name: "Laundry Baskets",
        description: "For all your soiled laundry",
        price: 80,
        imageUrl: "https://rukminim1.flixcart.com/image/312/312/fruit-vegetable-basket/z/g/n/rbm1-fair-food-original-imaeg72amx5wcn9c.jpeg?q=70"
      }, {
        name: "Hangers",
        description: "For your linen",
        price: 80,
        imageUrl: "https://sc02.alicdn.com/kf/HTB1Hc4mPFXXXXXMXXXXq6xXFXXXx/226837347/HTB1Hc4mPFXXXXXMXXXXq6xXFXXXx.jpg"
      }, {
        name: "Mop Bucket",
        description: "For easier mop cleaning",
        price: 80,
        imageUrl: "https://www.safetyshop.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/j/a/jan1041_gn_1.jpg"
      }

    ]
  },
  {
    name: "Construction Materials", items: [
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
    ]
  },
  {
    name: "School Supplies", items: [
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
    ]
  },
  {
    name: "3D Printer Fillament", items: [
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
    ]
  },
  {
    name: "Raw Plastic", items: [
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
    ]
  },
  {
    name: "Art", items: [
      {
        name: "Nylon Vase",
        description: "Designer vase",
        type: 'single',
        iamgeUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURKlZvThRqftNPXokcV5IjEn7iMp0j_ysYfTtnDrHvQoz8L8F9Q"
      }, {
        name: "Multi-Color Lamp",
        description: "Designer Lamp",
        type: 'single',
        iamgeUrl: "http://www.freshdesignpedia.com/wp-content/uploads/plastic-art-and-home-accessories-from-straws/plastic-art-straws-colorful-light.jpg"
      }, {
        name: "Plants with Vases",
        description: "Designer vase",
        type: 'single',
        iamgeUrl: "https://inhabitat.com/wp-content/blogs.dir/1/files/2015/04/Plastic-bottle-art-by-Veronika-Richterova-9.jpg"
      }, {
        name: "Fish Sclupture",
        description: "Sculpture",
        type: 'single',
        iamgeUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0wEwjvRkL80nNxM1ioueqPfrNGj-jpansDMbiLI3EBthfsGYBQ"
      }, {
        name: "Roses",
        description: "Flower art",
        type: 'single',
        iamgeUrl: "https://grist.files.wordpress.com/2014/09/ar-vortexas.jpg?w=660"
      }, {
        name: "Miniatures",
        description: "Sculptures/Figures",
        type: 'single',
        iamgeUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjaJwUqNq1XZ2P5o2zJyNk7TYUE0BfgBzJU4Jko6untLbXyOW-"
      }, {
        name: "Flower Vase",
        description: "Designer vase",
        type: 'single',
        iamgeUrl: "http://www.eatonquade.com/photos/full/fEQVASE.jpg"
      }, {
        name: "Wall Decor",
        description: "Designer Input",
        type: 'single',
        iamgeUrl: "https://www.e-flux.com/wp-content/uploads/2010/11/wpid-1195923815image_web.jpg?b8c429,1440"
      }, {
        name: "Pillar Sculptures",
        description: " Abstract Art",
        type: 'single',
        iamgeUrl: "http://www.dianaboulay.com/x_trash-art_recycled_plastic_arts_sculpture_from_waste_found_objects_Serendipity_2_by_Diana_Boulay_from_Canada.jpg"
      }, {
        name: "Flower Decor",
        description: "Hangable Decor",
        type: 'single',
        iamgeUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOmS8dK9LWFkdPqNCLA8QeWT8ovxjFqU3TocNtKLAk-xQIaQyNZQ"
      }, {
        name: "Human Size Sculpture",
        description: "Human Scale plastic art",
        type: 'single',
        iamgeUrl: "http://www.irazoqui.net/uploads/1/2/9/4/12949800/5207212.jpg?295"
      }
    ]
  }
]

module.exports = async function initDB() {
  const meta = await Meta.findOne();
  // if (meta && meta.seeded)
  //   return; 

  await Promise.all(
    categories
      .map(category => {
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

  const saveMeta = new Meta({ seeded: true })
  await saveMeta.save()

  return;
}