const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');


const ShoeRoutes = require('./controllers/main');
const Models = require('./models/models');
const models = Models(process.env.MONGO_DB_URL || 'mongodb://localhost/shoes');
const myRoutes = ShoeRoutes(models);
const app = express();

app.set("port", (process.env.PORT || 4040))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(session({ secret: 'Thabang', cookie: { maxAge: 60000 * 30}, resave: true, saveUninitialized: true}));
app.use(flash()); // set up http session

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Content-Type, Accept"');
  next();
})

// GET	/api/shoes	List all shoes in stock
app.get('/', function(req, res) {res.redirect('/api/shoes')})
app.get('/api/shoes', myRoutes.index);

// GET	/api/shoes/brand/:brandname	List all shoes for a given brand
app.get('/api/shoes/brand/:brandname', myRoutes.brand_search);

// GET	/api/shoes/size/:size	List all shoes for a given size
app.get('/api/shoes/size/:size', myRoutes.size_search);


// GET	/api/shoes/brand/:brandname/size/:size	List all shoes for a given brand and size
app.get('/api/shoes/brand/:brandname/size/:size',myRoutes.brand_size);

// POST	/api/shoes	Add a new new shoe to his stock.
app.post('/api/shoes', myRoutes.new_stock);

// POST	/api/shoes/sold/:id	Update the stock levels when a shoe is sold
app.post('/api/shoes/sold/:shoe_id', myRoutes.sold);

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
// });

var port = app.get("port");

app.listen(port, function() {
    console.log('Shoe API server started at http://localhost:' + port)
});
