const express = require('express');
const app = express();
const router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const verifyToken = require('../auth/VerifyToken')

const postController = require('../Controllers/postController');
const authController = require('../Controllers/AuthController');
const userController = require('../Controllers/UserController');

router.get('/post', verifyToken, postController.getPosts);
router.post('/post', verifyToken, postController.postPosts);

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/user/:name', verifyToken, userController.getUser)
module.exports = router;