const express = require('express')
const authRouter = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('../Models/user');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secret = process.env.SECRET;

authRouter.route('/register').post(function(req,res) {
    var hashedPassword = bcrypt.hashSync(req.body.password);

    user = new User({
        name : req.body.name,
        email: req.body.email,
        password : hashedPassword
    })

    user.save()
        .then((user) => {
            var token = jwt.sign({id : user._id}, secret, {
                expiresIn: 86400
            });

            res.status(200).send({auth : true, token : token})
        })
        .catch(err => {
            res.status(500).send("Internal server error when registering the user " + err)
        })
})

