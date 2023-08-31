const mongoose = require("mongoose"),
      express  = require("express"),
      app      = express(),
      bodyParser = require('body-parser');
//Routes
const indexRoutes = require("./routes/indexRoutes")
const adminRoutes = require("./routes/adminRoutes")
//App Config
app.set('view engine','ejs');
app.use(express.static('public'));


//Routes Using
app.use(indexRoutes);
//Server tanımlama
const server =app.listen(3000, (err) => {
   if(err)
   console.log(err);
console.log('App Started.Post number %d : ', server.address().port)

})
