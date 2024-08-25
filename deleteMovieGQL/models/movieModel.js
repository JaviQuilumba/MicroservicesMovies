const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Movie = sequelize.define('Movie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  },
  release_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'movies_inf',
  timestamps: false
});


Movie.deleteById = async (id) => {
  const deletedCount = await Movie.destroy({
    where: { id }
  });

  return deletedCount > 0;
};

module.exports = Movie;
