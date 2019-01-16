const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const localStrategy = new LocalStrategy(async (username, password, done) => {
	const user = await User.findOne({
		username: username,

	}).exec();

	if (!user) {
		console.log(`Login: Could not find username ${username}`);
		return done(null, false, { message: 'Incorrect username.' });
	}

	// Validate the UNSECURE (for now) password
	const validPassword = await bcrypt.compare(password, user.password);
	if (!validPassword) {
		console.log(`Login: Attempt failed due to incorrect password.`);
		return done(null, false, { message: 'Incorrect password.' });
	}

	else {
		done(null, user);
	}
});

module.exports = localStrategy;