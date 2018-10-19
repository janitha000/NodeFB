const User = require('../Models/user');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secret = process.env.SECRET;

exports.register = function (req, res) {
    var hashedPassword = bcrypt.hashSync(req.body.password);

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    user.save()
        .then((user) => {
            var token = jwt.sign({ id: user._id }, secret, {
                expiresIn: 86400
            });

            res.status(200).send({ auth: true, token: token })
        })
        .catch(err => {
            res.status(500).send("Internal server error when registering the user " + err)
        })
}

exports.login = function (req, res) {
    User.findOne({ name: req.body.name })
        .then((user => {
            if(!user)
                return res.status(401).send('User not available');

            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid)
                return res.status(401).send({ suth: false, token: null });

            var token = jwt.sign({ id: user._id }, process.env.SECRET, {
                expiresIn: 86400
            });

            res.status(200).send({ auth: true, token: token });
        }))
        .catch(err => {
            console.log(err);
            return res.status(500).send('Error on the server.');
        })
}

