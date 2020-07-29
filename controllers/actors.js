const { Movie, Genre, Actor, ActorMovie } = require("../database/models");
const { S3 } = require("aws-sdk");
const uuid = require("uuid").v4;

const s3 = new S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
});

console.log(process.env.AWS_BUCKET);

const bucketInfo = {
    Bucket: process.env.AWS_BUCKET,
};

function deleteFromBucket(objectId) {
    return new Promise((resolve, reject) => {
        s3.deleteObject(
            {
                Bucket: process.env.AWS_BUCKET,
                Key: objectId,
            },
            (err, data) => {
                if (err) return reject(err);
                resolve(data);
            }
        );
    });
}

function uploadToBucket(file) {
    return new Promise((resolve, reject) => {
        s3.upload(
            {
                Bucket: process.env.AWS_BUCKET,
                Key: uuid(),
                Body: file.buffer,
                ACL: "public-read",
                ContentType: file.mimetype,
            },
            (err, data) => {
                if (err) return reject(err);
                resolve(data.Key);
            }
        );
    });
}

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

        let imageId = null;
        if (req.file) {
            if (actor.profilePic) {
                deleteFromBucket(actor.profilePic);
            }
            imageId = await uploadToBucket(req.file);
        }

        await actor.update({
            ...req.body,
            profilePic: imageId,
        });

        res.redirect("back");
    },
    showCreate: async (req, res) => {
        res.render("actors/create-edit", {});
    },
    create: async (req, res) => {
        let imageId = await uploadToBucket(req.file);

        const actor = await Actor.create({
            ...req.body,
            profilePic: imageId,
        });
        res.redirect(`/actors/${actor.id}`);
    },
};
