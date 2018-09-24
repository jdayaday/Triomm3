const webview_height_ratio = {
	COMPACT: 'compact',
	TALL: 'tall',
	FULL: 'full'
}

class ItemCard {
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
	
	set webview_height(webview_height) {
		this._webview_height = webview_height;
	}
	get webview_height() {
		return this._webview_height;
	}
	
	set buttons(buttons) {
		this._buttons = buttons;
	}
	get buttons() {
		return this._buttons;
	}
}

module.exports = {
	'ItemCard': ItemCard,
	'webview_height_ratio': webview_height_ratio
};