let express = require('express'),
    app = express(),
    port = process.env.STICKY_PORT || 3000,
    // create model loading here
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/assignment-7-ZhexiLi', {
    useMongoClient : true
});
mongoose.Promise = global.Promise;

//adding body parser for handling request and response objects
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//initialize all the models and routes
const initApp = require('./app/app');
initApp(app);

app.listen(port);
console.log("Stickies RESTful API server started on: " + port);