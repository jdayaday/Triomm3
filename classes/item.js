const ITEM_CARD_HEIGHT = {
	COMPACT: 'compact',
	TALL: 'tall',
	FULL: 'full'
}

class ItemCard {
	constructor(title, image_url, item_url, itemcard_height, buttons) {
		this._title = title;
		this._image_url = image_url;
		this._item_url = item_url;
		this._itemcard_height = itemcard_height;
		this._buttons = buttons;
	}
	
	set title(title) {
		this._title = title;
	}
	get title() {
		return this._title;
	}
	
	set image_url(image_url) {
		this._imgae_url = image_url;
	}
	get image_url() {
		return this._image_url;
	}
	
	set item_url(item_url) {
		this._item_url = item_url;
	}
	get item_url() {
		return this._item_url;
	}
	
	set itemcard_height(itemcard_height) {
		this._webview_height = itemcard_height;
	}
	get itemcard_height() {
		return this._itemcard_height;
	}
	
	set buttons(buttons) {
		this._buttons = buttons;
	}
	get buttons() {
		return this._buttons;
	}
	
	toJSON(){
		return {
			title: this._title,
			image_url: this._image_url,
			default_action: {
				type: 'web_url',
				url: this._item_url,
				webview_height_ratio: this._itemcard_height
			},
			buttons: this._buttons
		};
	}
}

module.exports = {
	'ItemCard': ItemCard,
	'ITEM_CARD_HEIGHT': ITEM_CARD_HEIGHT
};