

/*
 * GET users listing.
 */
var Mongoose = require('mongoose');

exports.criar = function(req, res){

  var Site = Mongoose.model('Site');
  a = req.param('site');
  Site.findOne({newLink: a},function(err, link){

    if (err) return console.error(err);
    res.redirect("http://"+link.site);
  });

};

exports.gerar = function(req,res){

  var Site = Mongoose.model('Site');
  var link = new Site({
    site: req.body.site

  });

  link.save(function(err, data) {

  if (err) return console.error(err);
  res.render("site", {site: req.body.site, codigo: data.newLink});

});

}
