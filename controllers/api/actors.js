const { Movie, Genre, Actor, ActorMovie } = require("../../database/models");

module.exports = {
    index: async (req, res) => {
        const actors = await Actor.findAll({
            include: ["movies"],
        });

        const plainActors = actors.map((actor) => {
            return {
                id: actor.id,
                name: actor.firstName + " " + actor.lastName,
                profilePic: actor.profilePic,
                detail: `/api/actors/${actor.id}`,
            };
        });

        res.send({ count: plainActors.length, actors: plainActors });
    },

    detail: async (req, res) => {
        const actor = await Actor.findByPk(req.params.id, {
            include: ["movies"],
        });

        const plainActor = {
            id: actor.id,
            name: actor.firstName + " " + actor.lastName,
            profilePic: actor.profilePic,
            detail: `/api/actors/${actor.id}`,
        };

        res.send(plainActor);
    },
    test: (req, res) => {
        res.send(req.body);
    },
};
