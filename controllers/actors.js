const { Movie, Genre, Actor, ActorMovie } = require("../database/models");
const { S3 } = require("aws-sdk");
const uuid = require("uuid").v4;

const s3 = new S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
});

const bucketInfo = {
    Bucket: process.env.AWS_BUCKET,
};

function deleteFromBucket(objectId) {
    return new Promise((resolve, reject) => {
        s3.deleteObject(
            {
                ...bucketInfo,
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
                ...bucketInfo,
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

        let imageUrl = null;
        // if (req.file) {
        //     if (actor.profilePic) {
        //         deleteFromBucket(actor.profilePic);
        //     }
        //     imageId = await uploadToBucket(req.file);
        // }
        if (req.file) {
            imageUrl = "/images/actors/" + req.file.filename;
        } else {
            imageUrl = actor.profilePic;
        }

        await actor.update({
            ...req.body,
            profilePic: imageUrl,
        });

        res.redirect("back");
    },
    showCreate: async (req, res) => {
        res.render("actors/create-edit", { title: "Create Actor" });
    },
    create: async (req, res) => {
        // let imageUrl = await uploadToBucket(req.file);
        let imageUrl = "/images/actors/" + req.file.filename;

        const actor = await Actor.create({
            ...req.body,
            profilePic: imageUrl,
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
