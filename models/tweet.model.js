const mongoose = require('mongoose');
require('./comment.model')

const tweetSchema = new mongoose.Schema({
  body: {type: String, required: true },
  image: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true })

tweetSchema.pre('save', function (next) {
  next()
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
