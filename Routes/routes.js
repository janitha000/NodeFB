const express = require('express');
const app = express();
const router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const postController = require('../Controllers/postController');
const authController = require('../Controllers/AuthController');
const userController = require('../Controllers/UserController');

router.route('/post').get(postController.getPosts);
router.route('/post').post(postController.postPosts);

router.route('/register').post(authController.register);

router.route('/user/me').get(userController.getMe);

module.exports = router;