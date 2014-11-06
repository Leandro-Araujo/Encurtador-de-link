
/*
 * GET users listing.
 */

var Mongoose = require('mongoose');

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {

});

Mongoose.connect('mongodb://localhost/sitelink');

var SiteSchema = new Mongoose.Schema({
    site: String,
  newLink: {
    tipe: String,
    unique: true
    }
  
});

var Site = Mongoose.model('Site', SiteSchema);
