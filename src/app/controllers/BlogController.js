const Blog = require('../model/Blog');
const {mongooseToObject} = require('../../util/monggoose');
const { param } = require('express/lib/request');
class BlogController {
    //GET /blog/:slug
    show(req, res,next) {
        Blog.findOne({slug: req.params.slug})
            .then(blog => {
                res.render('blog/show',{ blog : mongooseToObject(blog) });
            })
            .catch(next);
    }

    create(req, res,next) {
        res.render('blog/create');
    }

    //GET /blogs/:id/edit
    edit(req, res,next) {
        Blog.findById(req.params.id)
            .then(blog=>res.render('blog/edit',{blog:mongooseToObject(blog)}))   
            .catch(next);
        
    }

    //POST /blogs/store
    store(req, res,next) {
        //res.json(req.body);
        const formData = req.body;
        formData.img = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
        const blog = new Blog(formData)
        blog.save()
            .then(()=> res.redirect('/'))
            .catch(err =>{

            } )
    }
    //PUT /blogs/id
    update(res, req, next){
        // Blog.updateOne({_id:req.params._id},req.body)
        //     .then(()=> res.redirect(303,'/me/blogs/store'))
        //     .catch(next);
        res.json(req.body);
    }
}

module.exports = new BlogController();
