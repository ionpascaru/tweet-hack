const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller')
const tweetsController = require('../controllers/tweets.controller')
const authMiddleware = require('../middlewares/auth.middleware')

module.exports = router;

router.get('/users/new', authMiddleware.isNotAuthenticated, usersController.new)
router.post('/users', authMiddleware.isNotAuthenticated, usersController.create)

router.get('/login', authMiddleware.isNotAuthenticated, usersController.login)
router.post('/login', authMiddleware.isNotAuthenticated, usersController.doLogin)

router.post('/tweets', authMiddleware.isAuthenticated, tweetsController.create)

router.get('/', authMiddleware.isAuthenticated, tweetsController.index)