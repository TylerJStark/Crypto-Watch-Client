const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersController = express.Router();

usersController.route('/signup')
	.post(async (req, res) => {

		const hash = await bcrypt.hash(req.body.password, 10);

		const newUser = await User.create({
			username: req.body.username,
			password: hash,
		});
		console.log('Signup: New user created with username ', newUser.username);
		res.json(newUser);
	});

usersController.route('/login')
	.post(passport.authenticate('local'), async (req, res) => {

		const username = req.body.username;
	
		const user = await User.findOne({username}).exec();
		console.log('Login: New user has logged in: ', user.username);
		res.redirect('/');
	});

usersController.route('/logout')
	.get( (req, res) => {
	req.logout();
	res.redirect('/');
});

module.exports = usersController;