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


Movie.updateById = async (id, data) => {
  const [updated] = await Movie.update(data, {
    where: { id },
    returning: true
  });

  if (updated) {
    return Movie.findOne({ where: { id } });
  }
  return null;
};

module.exports = Movie;
