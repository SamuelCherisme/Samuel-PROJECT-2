const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;
const reactViews = require('express-react-views');
const createEngine = reactViews.createEngine;
const reveal = console.log;



//* Begin Data Set Up */
const mongoURI = 'mongodb+srv://user0:0337476@cluster0.s4yrc.mongodb.net/logsName?retryWrites=true&w=majority'; // M

const db = mongoose.connection; // M
const list = require('./models/list.js'); // M
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); // M




db.once('open', ()=>{
  reveal('connected to Mongo bro and your awesome');
}); // M


/* End Data Setup*/


app.use(express.urlencoded({extended: false})); // C
app.use(express.static('public')); // N/A
app.set('view engine', 'jsx'); // V
app.engine('jsx', createEngine()); // V
app.use(methodOverride('_method'));
app.engine('jsx', require('express-react-views').createEngine());


//Controllers
const todoListController = require("./controllers/buildRest.js");
app.use("/list", todoListController)



//New Route

app.get('/', (req, res)=> {
  res.send('HEY')
})


app.listen(PORT, ()=>{
    reveal('This is the reveal message');
  })