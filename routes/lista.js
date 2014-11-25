

/*
* GET users listing.
*/

var Mongoose = require('mongoose');

exports.listar = function(req, res){
  var list = Mongoose.model('Site');
  list.find(function(err, dados){
    res.render('lista', {sites: dados});
  });

}
