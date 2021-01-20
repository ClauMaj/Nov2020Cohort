'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('blogs', [
      {
        title: 'Promises',
        body: 'vfdgvvsvfdsvav',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'sequelize',
        body: 'nghnghnghngntydbcbf',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'node',
        body: 'bfgbdgdfbgfbfbgbgd',
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'api',
        body: 'fdsfsdfsdfsdfsdfsdfsd',
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'react',
        body: 'fdsfsdfsdfsdfsdfdsfsfd',
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'bootstrap',
        body: 'fdsfsdfsdfsdfdsf',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'cdscscsdcdscs',
        body: 'cdscgtgthj',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'javascript',
        body: 'gfdgsgfgdfgdgsd',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'css',
        body: 'dfasdsfasdfasfsfd',
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'html',
        body: 'cdsvegtegtwgeggfgsgd',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'algorithms',
        body: 'ghuytkfxfcnsgrdzfdZxvbs',
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'java',
        body: 'fdsfasfergddbgb',
        userID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'whatever',
        body: 'fsdghjuyilujhsaaWSX  cve5rfdvfg',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'loop',
        body: 'fsdafsdfrvyhtybty',
        userID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'foreach',
        body: 'fsdagthynbdgt',
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'while',
        body: 'fethjut gergt y 6h5heh',
        userID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
