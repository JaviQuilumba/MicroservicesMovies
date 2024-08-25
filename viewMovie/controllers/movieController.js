const Movie = require('../models/movieModel');

const handleError = (res, err, statusCode = 500) => {
  res.status(statusCode).json({ error: err.message });
};

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json(movies);
  } catch (err) {
    handleError(res, err);
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByPk(id);
    if (!movie) {
      return handleError(res, new Error('Movie not found'), 404);
    }
    res.status(200).json(movie);
  } catch (err) {
    handleError(res, err);
  }
};

module.exports = {
  getMovies,
  getMovieById
};
