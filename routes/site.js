

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
    console.log(link);
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
  var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  var numberA = Math.floor(Math.random() * 51);
  var numberB = Math.floor(Math.random() * 51);
  var numberC = Math.floor(Math.random() * 51);
  var numberD = Math.floor(Math.random() * 51);
  var numberE = Math.floor(Math.random() * 51);

  var letraA = letras[numberA];
  var letraB = letras[numberB];
  var letraC = letras[numberC];
  var letraD = letras[numberD];
  var letraE = letras[numberE];

  var letras = letraA+letraB+letraC+letraD+letraE;

  var link = new Site({
    site: req.body.site,
    newLink: letras
  });

  link.save(function(err, data) {
  if (err) return console.error(err);
  console.dir(data);
});

  //res.send(req.body.site+letras);
  res.render("site", {site: req.body.site, codigo: letras});
}
