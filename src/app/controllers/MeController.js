
const Blog = require('../model/Blog');
const {mutipleMongooseToObject} = require('../../util/monggoose');

class MeController {
    //GET /blogs/store
    storedBlogs(req, res,next) {
        Blog.find({})
            .then(blog=>{
                res.render('me/stored-blog',{
                    blog:mutipleMongooseToObject(blog)
                })
            })
            .catch(next);
    }
}

module.exports = new MeController();
