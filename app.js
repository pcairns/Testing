var express = require('express'),
    connect = require('connect'),

// basic config of app

app = module.exports.app = express.createServer();
app.configure(function()
{
    //var db = mongoose.connect('mongodb://localhost/');
    
    app.use(connect.logger({ format : ":method :url"}));
    app.use(connect.compiler({ src: __dirname + '/public', enable: ['less'] }));
    app.use(connect.staticProvider(__dirname + '/public'));
    app.use(connect.methodOverride());
    app.set('views', __dirname + '/app/views');
    app.set('view engine', 'jade');

});

app.configure('development', function(){
    app.use(connect.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
   app.use(connect.errorHandler()); 
});


require('./app/routes');

app.listen(3000);