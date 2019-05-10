'use strict';
//npx sequelize seed:generate --name users
//npx sequelize db:seed:all
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        id: '00814c16-dab1-4b08-9007-06f56afa54cd',
        name: 'John',
        createdAt: "2019-05-11 00:01:34",
        updatedAt: "2019-05-11 00:01:35"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};