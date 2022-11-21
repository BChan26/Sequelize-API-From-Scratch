'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    'reviews',
  [
    {
    content: 'Content for my first review',
    rating: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    user_id: 1,
    product_id: 1},

    {
      content: 'Content for my second review',
      rating: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 2,
      product_id: 2},

    {
      content: 'Content for my third review',
      rating: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 3,
      product_id: 3},

    {
      content: 'Content for my fourth review',
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 4,
      product_id: 4},
  ])
},

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('reviews', null, {})
  }
};
