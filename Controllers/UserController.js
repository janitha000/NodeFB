const jwt = require('jsonwebtoken');

exports.getMe = function(req,res){
    var token = req.headers['x-access-token'];
    if(!token)
        return res.status(401).send({auth: false, message : 'No token provided'});

    jwt.verify(token, process.env.SECRET, function(err, decoded){
        if(err)
            return res.status(500).send({auth : false, message : 'Failed to authenticate'})

        res.status(200).send(decoded);
    })
}