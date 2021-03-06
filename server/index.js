const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const Property = require('./models/property');
const FakeDb = require('./fake-db');
const propertyRoutes = require('./routes/properties');
const userRoutes = require('./routes/users');

mongoose.connect(config.DB_URI).then(() => {
  /*const fakeDb = new FakeDb();
  fakeDb.seedDb();*/
});
const app = express();
app.use(bodyParser.json());
app.use('/api/v1/properties', propertyRoutes);
app.use('/api/v1/users', userRoutes);
/*app.get('/rentals', function(req, res){
  res.json({'success': true})
});*/
const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
  console.log('I am running');
});
