
var show_endpoints = function(app)
{
	// Exponer end points
	app.get('/', 
		function(req, res)
		{
	  		res.type('text/plain');
	  		res.send('Hell , its about time!!');
		}
	);

	app.get('/register', 
		function(req, res)
		{
	  		res.type('text/plain');
	  		res.send('Registro!!');
		}
	);
}

module.exports = show_endpoints;
