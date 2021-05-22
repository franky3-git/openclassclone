const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

app.set('port', port)
http.createServer(app)
.listen(port, (err) => {
	if(err) {
		return; 
	}
	console.log('Server is running on port ' + port);
})


