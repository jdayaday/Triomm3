// Required Modules
const config = require('config');				// Configurations - set NODE_ENV environment variable
const BootBot = require('bootbot');				// Facebook Messenger bot framework

function bot() {
	return new BootBot({
		accessToken: config.get('facebook.access_token'),
		verifyToken: config.get('facebook.verify_token'),
		appSecret: config.get('facebook.app_secret')
	});
}

module.exports = bot;