'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cast.belongsToMany(models.Movie, {through: 'MovieCast', foreignKey: 'CastId'})
    }

    getFullName(fn, ln) {
      return `${fn} ${ln}`
    }
  };
  Cast.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {
    hooks: {
      beforeValidate: (cast, options) => {
        if(cast.last_name === '') {
          cast.last_name = cast.first_name
        }
      },
    },
    sequelize,
    modelName: 'Cast',
  });
  
  return Cast;
};