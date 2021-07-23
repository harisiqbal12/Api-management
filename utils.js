const firebase = require('./firebase');

const firebaseUtils = {
	userRef: firebase.database().ref('users'),
	saveUser: createdUser =>
		firebaseUtils.userRef.child(createdUser.user.uid).set({
			name: createdUser.user.displayName,
			email: createdUser.user.email,
			userRole: createdUser.user.role,
		}),
};

module.exports = {
	firebaseUtils,
};
