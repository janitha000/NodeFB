const express = require('express');
const app = express();
const router = express.Router();

const Post = require('../Models/post');

router.route('/').get(function (req, res) {
    Post.find()
        .then((posts) => {
            res.send(JSON.stringify(posts));
        })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
})

router.route('/').post(function (req, res) {
    console.log(req.body);
    post = new Post(req.body);
    post.save()
        .then((post) => {
            res.status(200).send("Post added");

        })
        .catch(err => {
            res.status(400).send("Unable to add post");
        })
})

module.exports = router;