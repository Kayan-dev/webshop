"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "leo@messi.com",
          phone: 1234567,
          firstName: "Lionel",
          lastName: "Messi",
          address: "Barcelona",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "dan@redux.com",
          phone: 1234567,
          firstName: "Dan",
          lastName: "Redux",
          address: "London",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
