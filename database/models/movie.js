"use strict";
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        "Movie",
        {
            title: DataTypes.STRING,
            awards: DataTypes.INTEGER(10).UNSIGNED,
            releaseDate: DataTypes.DATE,
            revenue: DataTypes.STRING,
            length: DataTypes.INTEGER(10).UNSIGNED,
            coverArt: DataTypes.STRING,
        },
        {}
    );
    Movie.associate = function (models) {
        Movie.belongsTo(models.Genre, {
            as: "genre",
        });
        Movie.belongsToMany(models.Actor, {
            as: "actors",
            through: models.ActorMovie,
            foreignKey: "movieId",
        });
    };
    return Movie;
};
