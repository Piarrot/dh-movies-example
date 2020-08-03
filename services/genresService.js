const { Movie, Genre, Actor, ActorMovie } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Genre.findByPk(id, {
            include: ["movies"],
        });
    },
    findAll: async () => {
        return await Genre.findAll({
            include: ["movies"],
        });
    },
};
