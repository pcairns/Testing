var app = module.parent.exports.app;


app.get('/', function (req, res) {
        res.render('index', {
            locals: {
                title: 'Index Page'    
                }
            });
});

