
const Blog = require('../model/Blog');
const {mutipleMongooseToObject} = require('../../util/monggoose');

class SiteController {

    index(req,res, next){
        Blog.find({})
            .then(blog=> {
                res.render('home',{
                    blog: mutipleMongooseToObject(blog)
                });
            })
            .catch(next);
   
    }
    //GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
