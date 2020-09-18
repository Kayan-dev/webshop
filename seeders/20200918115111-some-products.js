"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Iphone",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
          imageURL:
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188",
          price: 600,
          description: "Iphone 11",
        },
        {
          name: "macbook",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
          imageURL:
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188",
          price: 1600,
          description: "macbook pro 13",
        },
        {
          name: "macbook",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
          imageURL:
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188",
          price: 2600,
          description: "macbook pro 16",
        },
        {
          name: "Charger",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 3,
          imageURL:
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188",
          price: 500,
          description: "Ihpone Charger",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
