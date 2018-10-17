const express = require('express');
const app = express();
const router = express.Router();

const Post = require('../Models/post');

router.route('/').get(function(req,res) {
    Post.find(function(err, posts){
        if(err)
            console.log(err)

        res.json(posts);
    })       
})

router.route('/').post(function(req,res){
    post = new Post(req.body);
    Post.save()
        .then((post) => {
            res.status(200).send("Post added");

        })
        .catch(err => {
            res.status(400).send("Unable to add post");
        })
})

module.exports = router;