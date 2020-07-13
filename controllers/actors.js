const { Movie, Genre, Actor, ActorMovie } = require("../database/models");

module.exports = {
    index: async (req, res) => {
        const actors = await Actor.findAll({
            include: ["movies"],
        });

        res.render("actors/index", { actors });
    },
    detail: async (req, res) => {
        const actor = await Actor.findByPk(req.params.id, {
            include: ["movies"],
        });

        res.render("actors/detail", { actor });
    },
    showEdit: async (req, res) => {
        const actor = await Actor.findByPk(req.params.id, {
            include: ["movies"],
        });

        res.render("actors/create-edit", { actor, title: "Edit Actor" });
    },
    update: async (req, res) => {
        const actor = await Actor.findByPk(req.params.id, {
            include: ["movies"],
        });
        await actor.update({
            ...req.body,
            profilePic: req.file.filename,
        });
        res.redirect("back");
    },
    showCreate: async (req, res) => {
        res.render("actors/create-edit", {});
    },
    create: async (req, res) => {
        const actor = await Actor.create({
            ...req.body,
        });
        res.redirect(`/actors/${actor.id}`);
    },
};
