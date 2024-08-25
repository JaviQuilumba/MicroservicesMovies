const Movie = require('../models/movieModel');

const deleteMovie = async (_, { id }) => {
  try {
    const deleted = await Movie.deleteById(id);
    if (!deleted) {
      throw new Error('Movie not found');
    }
    return true;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  deleteMovie
};
