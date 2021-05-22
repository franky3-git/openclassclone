const express = require('express');
const path = require('path');

const app = express();
//set settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'render'));

//middlewares
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.render('home')
})

app.get('/login', (req, res) => {
	res.render('login');
})
app.get('/signup', (req, res) => {
	res.render('signup');
})
module.exports = app;