#!/usr/bin/env node

'use strict';

// Initialize FB Messenger Bot instance
const bot = require('./startup/config')();
const greetings = require('./startup/greeting')(bot);

// Load Bot modules
//bot.module('./modules/greeting');

// Start the bot webhook
bot.start();