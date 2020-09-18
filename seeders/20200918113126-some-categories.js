"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Phones",
          imageURL: "data:image/jpeg;base64,/9j/4AAQSkZJ=",
          description: "Apple phones",
        },
        {
          name: "Laptops",
          imageURL:
            "https://content.hwigroup.net/images/products_500x300/499291/apple-macbook-air-2018-133-space-grey-mre82na.jpg",
          description: "Apples's laptops",
        },
        {
          name: "Chargers",
          imageURL:
            "https://content.hwigroup.net/images/products_500x300/499291/apple-macbook-air-2018-133-space-grey-mre82na.jpg",
          description: "Apples's Chargers",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
