const moviesService = require("../../services/moviesService");

module.exports = {
    index: async (req, res) => {
        const movies = await moviesService.findAll();
        res.send({ count: movies.length, movies: movies });
    },

    detail: async (req, res) => {
        const movie = await moviesService.findOne(req.params.id);
        res.send(movie);
    },

    featured: async (req, res) => {
        const movies = await moviesService.findAll();
        const featuredMovie = movies[Math.floor(Math.random() * movies.length)];
        res.send(featuredMovie);
    },
};
