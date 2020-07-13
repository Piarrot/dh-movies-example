"use strict";
module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define(
        "Actor",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            rating: DataTypes.FLOAT(3, 1),
            profilePic: DataTypes.STRING,
        },
        {}
    );
    Actor.associate = function (models) {
        Actor.belongsTo(models.Movie, {
            as: "favoriteMovie",
            foreignKey: "favoriteMovieId",
        });
        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: models.ActorMovie,
            foreignKey: "actorId",
        });
    };
    return Actor;
};
