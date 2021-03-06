const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/user');

const Property = require('../models/property');

router.get('/secret', UserCtrl.authMiddleware, function(req, res){
  res.json({"secret" : true});
});
router.get('', function(req, res){
 Property.find({}, function(err, foundProperties){
   res.json(foundProperties);
 });
});

router.get('/:id', function(req, res){


  const propertyId = req.params.id;
 Property.findById(propertyId, function(err, foundProperty){
   if(err){
     res.status(422).send({errors: [{title: 'Property error', detail: 'Could not find Property!'}]});
   }
   res.json(foundProperty);
 });
});

module.exports = router;
