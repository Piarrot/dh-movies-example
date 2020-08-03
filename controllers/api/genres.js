const genresService = require("../../services/genresService");

module.exports = {
    index: async (req, res) => {
        const genres = await genresService.findAll();

        res.send({ count: genres.length, genres: genres });
    },

    detail: async (req, res) => {
        const genre = await genresService.findOne(req.params.id);

        res.send(genre);
    },
};
