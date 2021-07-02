'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.ProductionHouse, { foreignKey: 'ProductionHouseId' })
      Movie.belongsToMany(models.Cast, {through: 'MovieCast', foreignKey: 'MovieId'})
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    released_year: {
      type: DataTypes.INTEGER,
      validate: {
        isLeapYear(value) {
          if(value % 4 == 0) {
            throw new Error('Tidak boleh input tahun kabisat')
          }
        }
      }
    },
    genre: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    ProductionHouseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};