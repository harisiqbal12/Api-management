const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const cookieSession = require('cookie-session');

dotenv.config({ path: `${__dirname}/config.env` });

const app = express();

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days period
		keys: [process.env.cookieKey],
	})
);
app.use(express.json());
app.use(express.urlencoded());

app.use('/api', userRoutes);
app.use('/', (req, res, next) => {
	res.send('server side');
});

app.listen(process.env.PORT, (req, res) => {
	console.log('Listening..');
});
