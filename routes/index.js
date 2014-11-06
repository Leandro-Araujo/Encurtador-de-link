
/*
 * GET home page.
 */

exports.index = function(req, res){

  //var b = String.fromCharCode(65);

  res.render('index', { title: 'Express', random:"Escreva o site" });
};
