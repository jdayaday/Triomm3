#!/usr/bin/env node

'use strict';
// Required Modules
const config = require('config');		// Configurations - set NODE_ENV environment variable
const BootBot = require('bootbot');		// Facebook Messenger bot framework

// Initialize FB Messenger Bot instance
const bot = new BootBot({
  accessToken: config.get('facebook.access_token'),
  verifyToken: config.get('facebook.verify_token'),
  appSecret: config.get('facebook.app_secret')
});

/* Postback sample response
{ recipient: { id: '1917098875253161' },
  timestamp: 1537690355401,
  sender: { id: '1573913492709226' },
  postback: { payload: 'ORDER_ITEM_001', title: 'Order' } 
}*/

// Handle Postbacks
bot.on('postback:ORDER_ITEM_001', (payload, chat, data) => {
	chat.say('How many would you like to order?');
});

bot.on('postback:ORDER_ITEM_002', (payload, chat, data) => {
	chat.say('How many would you like to order?');
});

// Handle Messages
bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  //chat.say(`Echo: ${text}`);
  chat.say('What would you like to order today?');
  chat.say({
  	cards: [
  		{ title: 'Beef Siomai', image_url: 'http://cdn.project-one.net/triomm3/beef_siomai_HR.jpg', default_action: { 
  				type: 'web_url',
  				url: 'http://cdn.project-one.net/triomm3/beef_siomai_HR.jpg',
  				webview_height_ratio: 'tall'
  			}, buttons: [
  				{
  					type: "postback",
  					title: "Add to Cart",
  					payload: "ORDER_ITEM_001"
  				}
  			]
  		},
  		{ title: 'Chicken Siomai', image_url: 'http://cdn.project-one.net/triomm3/chicken_siomaiHRjpg.jpg', default_action: {
  				type: 'web_url',
  				url: 'http://cdn.project-one.net/triomm3/chicken_siomaiHRjpg.jpg',
  				webview_height_ratio: 'tall'
  			}, buttons: [
  				{
  					type: "postback",
  					title: "Add to Cart",
  					payload: "ORDER_ITEM_002"
  				}
  			]
  		},
  		{ title: 'Japanese Siomai', image_url: 'http://cdn.project-one.net/triomm3/japanese_siomaiHR.jpg', default_action: {
  				type: 'web_url',
  				url: 'http://cdn.project-one.net/triomm3/japanese_siomaiHR.jpg',
  				webview_height_ratio: 'tall'
  			}, buttons: [
  				{
  					type: "postback",
  					title: "Add to Cart",
  					payload: "ORDER_ITEM_003"
  				}
  			]
  		},
  		{ title: 'Pork Siomai', image_url: 'http://cdn.project-one.net/triomm3/pork_siomaiHR.jpg', default_action: {
  				type: 'web_url',
  				url: 'http://cdn.project-one.net/triomm3/pork_siomaiHR.jpg',
  				webview_height_ratio: 'tall'
  			}, buttons: [
  				{
  					type: "postback",
  					title: "Add to Cart",
  					payload: "ORDER_ITEM_004"
  				}
  			]
  		},
  		{ title: 'Sharksfin Siomai', image_url: 'http://cdn.project-one.net/triomm3/sharksfin_siomaiHR.jpg', default_action: {
  				type: 'web_url',
  				url: 'http://cdn.project-one.net/triomm3/sharksfin_siomaiHR.jpg',
  				webview_height_ratio: 'tall'
  			}, buttons: [
  				{
  					type: "postback",
  					title: "Add to Cart",
  					payload: "ORDER_ITEM_005"
  				}
  			]
  		},
  		{ title: 'Tuna Siomai', image_url: 'http://cdn.project-one.net/triomm3/tuna_siomai_HR.jpg', default_action: {
  				type: 'web_url',
  				url: 'http://cdn.project-one.net/triomm3/tuna_siomai_HR.jpg',
  				webview_height_ratio: 'tall'
  			}, buttons: [
  				{
  					type: "postback",
  					title: "Add to Cart",
  					payload: "ORDER_ITEM_06"
  				}
  			]
  		}
  	]
  });
});

// Start the bot hook
bot.start();