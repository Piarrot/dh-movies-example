const { Movie, Genre, Actor, ActorMovie } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Actor.findByPk(id, {
            include: ["movies"],
        });
    },
    findAll: async () => {
        return await Actor.findAll({
            include: ["movies"],
        });
    },
};
