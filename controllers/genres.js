const { Movie, Genre, Actor, ActorMovie } = require("../database/models");

module.exports = {
    index: async (req, res) => {
        const genres = await Genre.findAll({
            include: ["movies"],
        });

        res.render("genres/index", { genres });
    },
    detail: async (req, res) => {
        const genre = await Genre.findByPk(req.params.id, {
            include: ["movies"],
        });

        res.render("genres/detail", { genre });
    },
    showEdit: async (req, res) => {
        const genre = await Genre.findByPk(req.params.id, {
            include: ["movies"],
        });
        res.render("genres/create-edit", { genre, title: "Edit Genre" });
    },
    update: async (req, res) => {
        const genre = await Genre.findByPk(req.params.id, {
            include: ["movies"],
        });
        await genre.update({
            ...req.body,
        });
        res.redirect("back");
    },
    showCreate: async (req, res) => {
        res.render("genres/create-edit", { title: "Create Genre" });
    },
    create: async (req, res) => {
        const genre = await Genre.create({
            ...req.body,
        });
        res.redirect(`/genres/${genre.id}`);
    },
};
