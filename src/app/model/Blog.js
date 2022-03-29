// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  img: String,
  title: String,
  videoId: String,
  slug: String,
  body: String,
  date: { type: Date, default: Date.now },
  slug: {type: String, slug:'title', unique:true}
});

module.exports = mongoose.model('Blog', BlogPost);