const firebase = require('../firebase');
const firebaseUtils = require('../utils');

// const firestore = firebase.firestore();

const addUser = async (req, res, next) => {
	try {
		const { email, password, name, role } = req.body;
		const user = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);

		await user.user.updateProfile({
			displayName: name,
		});

		await firebase.auth().onAuthStateChanged(function (user) {
			if (!user) return;

			user.role = role;
		});

		await firebaseUtils.firebaseUtils.saveUser(user);

		res.status(200).send('Account Created Successfully');
	} catch (err) {
		console.log(err);
		res.status(400).send(err.message);
	}
};

const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		await firebase.auth().signInWithEmailAndPassword(email, password);

		res.status(200).send('signed in successfully');
	} catch (err) {
		console.log(err);
		res.status(400).send(err.message);
	}
};

const getCurrentUser = async (req, res, next) => {
	try {
		const user = await firebase.auth().currentUser;
		if (!user) {
			res.status(200);
			return;
		}

		res.status(200).send(user);
	} catch (err) {
		console.log(err);
		err.status(400).send(err.message);
	}
};

const logoutUser = (req, res, next) =>{

}

module.exports = {
	addUser,
	loginUser,
	getCurrentUser,
	logoutUser,
};
