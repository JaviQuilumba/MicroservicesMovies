const Movie = require('../models/movieModel');

const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.updateById(req.params.id, req.body);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  updateMovie
};
