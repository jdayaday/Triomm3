// Required Modules
const BootBot = require('bootbot');				            // Facebook Messenger bot framework
const ButtonSub = require('../classes/button-submenu');     // Submenu button
const ButtonPost = require('../classes/button-postback');   // Postback button
const ButtonWeb = require('../classes/button-webview');     // Webview button

function createMenu(buttons) {
    const menu = [];

    buttons.forEach(element => {
        menu.push(element.toJSON());
    });

    return menu;
};

module.exports = (bot) => {
    // Set greeting text & Get Started Button
    bot.setGreetingText('Welcome to Triomm3 Solutions!');
    bot.setGetStartedButton((payload, chat) => {
        chat.getUserProfile().then((user) => {
            chat.say(`Welcome ${user.first_name}! What can I do for you today?`);
        });
    });

    // Set persistent menu
    const buttons = [];

    const btnLogin = new ButtonPost('Login', 'LOGIN');
    //const btnHelp = new ButtonSub();
    const btnLogout = new ButtonPost('Logout', 'LOGOUT');

    buttons.push(btnLogin);
    //buttons.push(btnHelp);
    buttons.push(btnLogout);

    const disableInput = false;
    bot.setPersistentMenu(createMenu(buttons), disableInput);
};