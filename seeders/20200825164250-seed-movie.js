'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Movies', [
     {
       name: 'Cintaku Kepentok Sudoku',
       released_year: 2017,
       genre: 'comedy',
       ProductionHouseId: 0,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Ratapan Di Depan Mac Mini',
      released_year: 2014,
      genre: 'drama',
      ProductionHouseId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Boggle 2, The Haunting Anchor',
      released_year: 2011,
      genre: 'horror',
      ProductionHouseId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Heroku wa Heromu da',
      released_year: 2008,
      genre: 'animasi',
      ProductionHouseId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Taubat Instruktur Karena Tugas Tak di Buat',
      released_year: 2000,
      genre: 'religi',
      ProductionHouseId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Movies', null, {})
  }
};
