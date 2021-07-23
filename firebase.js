const firebase = require('firebase');
require('firebase/auth');
require('firebase/database');
require('firebase/storage');

const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/config.env` });

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
	databaseURL: process.env.DATABASE_URL
};

const db = firebase.initializeApp(firebaseConfig);

module.exports = db;
