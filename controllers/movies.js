const { Movie, Genre, Actor, Sequelize } = require("../database/models");
const Op = Sequelize.Op;

//Mapea la lista para que sea simple de mostrar el select
//Ver "/views/components/form-select.ejs"
async function mapGenresToSelectOptions() {
    const genres = await Genre.findAll();
    return genres.map((genre) => {
        return { id: genre.id, label: genre.name };
    });
}

//Mapea la lista para que sea simple de mostrar el select
//Ver "/views/components/form-select.ejs"
async function getAvailableActorsAndMapToSelectOptions(movie) {
    const movieActorsIds = movie.actors.map((actor) => {
        return actor.id;
    });
    const availableActors = await Actor.findAll({
        where: {
            id: {
                [Op.notIn]: movieActorsIds,
            },
        },
    });

    return availableActors.map((actor) => {
        return { id: actor.id, label: `${actor.firstName} ${actor.lastName}` };
    });
}

module.exports = {
    index: async (req, res) => {
        const movies = await Movie.findAll({
            include: ["genre", "actors"],
        });
        res.render("movies/index", { movies });
    },

    detail: async (req, res) => {
        const id = req.params.id;
        const movie = await Movie.findByPk(id, {
            include: ["genre", "actors"],
        });
        //Si la pelicula tiene un genero
        if (movie.genre) {
            //Obtengo todas las peliculas de ese genero para poder mostrar
            //correctamente el link de genero (ver "/views/components/genreLink.ejs")
            movie.genre.movies = await movie.genre.getMovies();
        }
        res.render("movies/detail", { movie });
    },

    showEdit: async (req, res) => {
        const id = req.params.id;

        const movie = await Movie.findByPk(id, {
            include: ["genre", "actors"],
        });

        //Mapea la lista de generos para que sea simple de mostrar el select
        //Ver "/views/components/form-select.ejs"
        const genres = await mapGenresToSelectOptions();

        const availableActors = await getAvailableActorsAndMapToSelectOptions(
            movie
        );

        res.render("movies/create-edit", {
            title: "Edit Movie",
            movie,
            genres,
            availableActors,
        });
    },

    update: async (req, res) => {
        const id = req.params.id;
        const movie = await Movie.findByPk(id, {
            include: ["genre", "actors"],
        });
        await movie.update({
            ...req.body,
        });
        res.redirect("back");
    },

    showCreate: async (req, res) => {
        const genres = await mapGenresToSelectOptions();

        res.render("movies/create-edit", { genres, title: "Create Movie" });
    },

    create: async (req, res) => {
        const movie = await Movie.create({
            ...req.body,
        });
        res.redirect(`/movies/${movie.id}`);
    },

    addActor: async (req, res) => {
        const movie = await Movie.findByPk(req.params.id);
        const actor = await Actor.findByPk(req.body.actorId);
        await movie.addActor(actor, {
            through: {
                screentime: req.body.screentime,
            },
        });
        res.redirect("back");
    },

    updateActor: async (req, res) => {
        const movie = await Movie.findByPk(req.params.id);
        const actor = await Actor.findByPk(req.params.actorId);
        await movie.addActor(actor, {
            through: {
                screentime: req.body.screentime,
            },
        });
        res.redirect("back");
    },

    removeActor: async (req, res) => {
        const movie = await Movie.findByPk(req.params.id);
        const actor = await Actor.findByPk(req.params.actorId);
        movie.removeActor(actor);
        res.redirect("back");
    },
};
