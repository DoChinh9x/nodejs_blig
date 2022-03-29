const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars').engine;
const path = require('path');

const app = express();

const route = require('./routes');
const db = require('./config/db');
// connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
//xử lý dữ liệu gửi lên sever
app.use(
    express.urlencoded({
        extended: true,
    }),
); //xử lý form
app.use(express.json()); //xử lý code js
//http logger
//app.use(morgan('combined'));
//method override
app.use(methodOverride('_method'));
// template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources','views'));

//Routes init
route(app);

app.listen(3000);
