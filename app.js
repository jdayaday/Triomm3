#!/usr/bin/env node

'use strict';
// Required Modules
const config = require('config');				// Configurations - set NODE_ENV environment variable
const BootBot = require('bootbot');				// Facebook Messenger bot framework
// Helper Classes
const Card = require('./classes/item');			// Class ItemCard
const Button = require('./classes/button');		// Class Button

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
bot.on('postback', (payload, chat, data) => {
	chat.say('How many would you like to order?');
});

// Handle Messages
bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  //chat.say(`Echo: ${text}`);
  chat.say('What would you like to order today?');
  chat.say({
  	cards: getItemCards()
  });
});

// Start the bot hook
bot.start();

// Functions
function getItemCards() {
	// This will be replaced by a database query...
	var cards = [];
	
	// Item 1
	const btn_itm1 = new Button('ADD TO CART', 'ORDER_ITEM_001');
	const card_itm1 = new Card.ItemCard (
		'Beef Siomai',
		'http://cdn.project-one.net/triomm3/beef_siomai_HR.jpg',
		'http://cdn.project-one.net/triomm3/beef_siomai_HR.jpg',
		Card.ITEM_CARD_HEIGHT.COMPACT,
		[btn_itm1.toJSON()]
	);
	cards.push(card_itm1);
	
	// Item 2
	const btn_itm2 = new Button('ADD TO CART', 'ORDER_ITEM_002');
	const card_itm2 = new Card.ItemCard (
		'Chicken Siomai',
		'http://cdn.project-one.net/triomm3/chicken_siomaiHRjpg.jpg',
		'http://cdn.project-one.net/triomm3/chicken_siomaiHRjpg.jpg',
		Card.ITEM_CARD_HEIGHT.COMPACT,
		[btn_itm2.toJSON()]
	);
	cards.push(card_itm2);
	
	// Item 3
	const btn_itm3 = new Button('ADD TO CART', 'ORDER_ITEM_003');
	const card_itm3 = new Card.ItemCard (
		'Japanese Siomai',
		'http://cdn.project-one.net/triomm3/japanese_siomaiHR.jpg',
		'http://cdn.project-one.net/triomm3/japanese_siomaiHR.jpg',
		Card.ITEM_CARD_HEIGHT.COMPACT,
		[btn_itm3.toJSON()]
	);
	cards.push(card_itm3);
	
	// Item 4
	const btn_itm4 = new Button('ADD TO CART', 'ORDER_ITEM_004');
	const card_itm4 = new Card.ItemCard (
		'Pork Siomai',
		'http://cdn.project-one.net/triomm3/pork_siomaiHR.jpg',
		'http://cdn.project-one.net/triomm3/pork_siomaiHR.jpg',
		Card.ITEM_CARD_HEIGHT.COMPACT,
		[btn_itm4.toJSON()]
	);
	cards.push(card_itm4);
	
	// Item 5
	const btn_itm5 = new Button('ADD TO CART', 'ORDER_ITEM_005');
	const card_itm5 = new Card.ItemCard (
		'Sharksfin Siomai',
		'http://cdn.project-one.net/triomm3/sharksfin_siomaiHR.jpg',
		'http://cdn.project-one.net/triomm3/sharksfin_siomaiHR.jpg',
		Card.ITEM_CARD_HEIGHT.COMPACT,
		[btn_itm5.toJSON()]
	);
	cards.push(card_itm5);
	
	// Item 6
	const btn_itm6 = new Button('ADD TO CART', 'ORDER_ITEM_006');
	const card_itm6 = new Card.ItemCard (
		'Tuna Siomai',
		'http://cdn.project-one.net/triomm3/tuna_siomai_HR.jpg',
		'http://cdn.project-one.net/triomm3/tuna_siomai_HR.jpg',
		Card.ITEM_CARD_HEIGHT.COMPACT,
		[btn_itm6.toJSON()]
	);
	cards.push(card_itm6);
	
	return cards;
}