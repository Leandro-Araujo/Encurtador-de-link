

/*
 * GET users listing.
 */
var Mongoose = require('mongoose');
//var Site = Mongoose.model('Site');
exports.criar = function(req, res){
  var Site = Mongoose.model('Site');
  a = req.param('site');
  Site.findOne({newLink: a},function(err, link){
    if (err) return console.error(err);
    //console.log(link);
    //res.send(link.site);
    res.redirect("http://"+link.site);
  });

  //res.send(req.param('site'));
};
aleatorio = function(){

}
exports.gerar = function(req,res){
  var Site = Mongoose.model('Site');
/*  Site.findOne(function(err, data){
    console.log(data);
  });
*/


  var link = new Site({
    site: req.body.site
  });

  link.save(function(err, data) {
  if (err) return console.error(err);
  console.dir(data);
  res.render("site", {site: req.body.site, codigo: data.newLink});
});

  //res.send(req.body.site+letras);

}
