const { Movie, Genre, Actor, ActorMovie } = require("../../database/models");
const actorService = require("../../services/actorService");

module.exports = {
    index: async (req, res) => {
        const actors = await actorService.findAll();

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
        const actor = await actorService.findOne(req.params.id);

        const plainActor = {
            id: actor.id,
            name: actor.firstName + " " + actor.lastName,
            profilePic: actor.profilePic,
            detail: `/api/actors/${actor.id}`,
        };

        res.send(plainActor);
    },
};
