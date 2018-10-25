const User = require('../Models/user');

exports.getUser = function(req,res){
    var userName = req.params['name'];

    User.findOne({name : userName} )
        .then(user => {
            res.send(JSON.stringify(user));
        })
        .catch(err =>{
            res.status(500).send(JSON.stringify("Internal error when getting user"));
        })
}