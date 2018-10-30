const User = require('../Models/user');
const Post = require('../Models/post');

exports.getStatistics = async function(req, res){
    userCount : Number;
    postCount : Number;

    userCount = await getUserCount();
    postCount = await getPostCount();

    var stat = {
        'User' : userCount,
        'Post' : postCount
    }

    res.status(200).send(JSON.stringify(stat));
    
}

async function getPostCount(){
    return new Promise(function(resolve, reject){
        Post.find().count()
        .then((number => {
            resolve(number);
        }))
    })
    
}

async function getUserCount(){
    return new Promise(function(resolve, reject){
        User.find().count()
        .then((number => {
            resolve(number);
        }))
    })
}

