
/*
 * GET home page.
 */

exports.index = function(req, res){

  res.render('index', { title: 'Encurtador de links', random:"Escreva o site" });
  
};
