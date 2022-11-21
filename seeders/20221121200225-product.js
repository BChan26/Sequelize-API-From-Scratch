'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    'products',
    [
      {
        name: "product #1",
        description: "description of product 1",
        price: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "product #2",
        description: "description of product 2",
        price: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "product #3",
        description: "description of product 3",
        price: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "product #4",
        description: "description of product 4",
        price: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
  )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
};
