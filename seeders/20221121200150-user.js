'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    'users',
  [
    {
      username: 'blah',
      password: 'Password123!',
      email: 'fake@fake.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'blah blah',
      password: 'Password123!',
      email: 'fake@fake.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'blah blah blah',
      password: 'Password123!',
      email: 'fake@fake.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'blah blah blah blach',
      password: 'Password123!',
      email: 'fake@fake.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },


  ]
  )
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete ('users', null, {})
  }
};
