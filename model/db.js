
/*
 * GET users listing.
 */

var Mongoose = require('mongoose');
var shortId = require('shortid');

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {

});

Mongoose.connect('mongodb://localhost/sitelink');

var SiteSchema = new Mongoose.Schema({

    site: String,
    newLink: {
      type:String,
      unique: true,
      'default': shortId.generate
      }

});

var Site = Mongoose.model('Site', SiteSchema);
