let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let questionSchema = new Schema({
  question: String,
  author: { type: Schema.Types.ObjectId, ref: "User" },
  upVotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
  tags: [String],
  views: { type: Number, default: true }
}, { timestamps: true });

module.exports = Schema;