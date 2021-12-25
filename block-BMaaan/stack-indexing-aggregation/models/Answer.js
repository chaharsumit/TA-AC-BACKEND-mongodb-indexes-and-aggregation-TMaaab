let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let answerSchema = new Schema({
  answer: String,
  author: { type: Schema.Types.ObjectId, ref: "User" },
  replies: [{type: Schema.Types.ObjectId, ref: "Reply"}],
  upVotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = Schema;