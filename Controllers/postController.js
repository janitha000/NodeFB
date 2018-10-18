const Post = require('../Models/post');

exports.getPosts = function (req, res) {
    Post.find()
        .then((posts) => {
            res.send(JSON.stringify(posts));
        })
        .catch(() => { res.send('Sorry! Something went wrong.');}
    );
};

exports.postPosts = function (req, res) {
    console.log(req.body);
    post = new Post(req.body);
    post.save()
        .then((post) => {
            res.status(200).send("Post added");

        })
        .catch(err => {
            res.status(400).send("Unable to add post");
        })
};