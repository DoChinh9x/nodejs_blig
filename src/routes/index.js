const newRouters = require('./news');
const meRouter = require('./me');
const blogRouters = require('./blogs');
const newSite = require('./site');

function route(app) {
    app.use('/', newSite);
    app.use('/blogs', blogRouters);
    app.use('/me',meRouter);
    app.use('/news', newRouters);
}

module.exports = route;
