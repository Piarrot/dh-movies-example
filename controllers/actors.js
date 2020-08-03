const { Movie, Genre, Actor, ActorMovie } = require("../database/models");
const actorService = require("../services/actorService");

module.exports = {
    index: async (req, res) => {
        const actors = await actorService.findAll();

        res.render("actors/index", { actors });
    },
    detail: async (req, res) => {
        const actor = await actorService.findOne(req.params.id);

        res.render("actors/detail", { actor });
    },
    showEdit: async (req, res) => {
        const actor = await actorService.findOne(req.params.id);

        res.render("actors/create-edit", { actor, title: "Edit Actor" });
    },
    update: async (req, res) => {
        const actor = await actorService.findOne(req.params.id);
        await actor.update({
            ...req.body,
            profilePic: "/images/actors/" + req.file.filename,
        });
        res.redirect("back");
    },
    showCreate: async (req, res) => {
        res.render("actors/create-edit", { title: "Create Actor" });
    },
    create: async (req, res) => {
        const actor = await Actor.create({
            ...req.body,
        });
        res.redirect(`/actors/${actor.id}`);
    },
    delete: async (req, res) => {
        await Actor.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.redirect("/actors");
    },
};
