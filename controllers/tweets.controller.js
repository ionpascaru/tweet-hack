const mongoose = require('mongoose');
const Tweet = require('../models/tweet.model');
const User = require('../models/user.model');

module.exports.index = (req, res, next) => {
    Tweet.find()
        .limit(10)
        .sort({createdAt: -1}) 
        .populate("user")
        .then(tweets => {
            res.render('tweets/index', {tweets})
        })
        .catch(next)
    
}

module.exports.create = (req, res, next) => {
    const tweet = new Tweet({
        body: req.body.body,
        image: req.body.image,
        user: req.currentUser._id
    }) 

    tweet.save()
        .then(() => {
            res.redirect('/')
        })
        .catch(next)
}

module.exports.profile = (req, res, next) => {
}