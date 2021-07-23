const express = require('express');
const {
	addUser,
	loginUser,
	getCurrentUser,
	logoutUser,
} = require('../controllers/userController');


const router = express.Router();

router.route('/signup').post(addUser);
router.route('/login').post(loginUser)
router.route('/current_user').get(getCurrentUser)
router.route('/').get(logoutUser)


module.exports = router;
