class ItemCard {
	constructor(title, image_url, item_url, webview_height_ratio, buttons) {
		this._title = title;
		this._image_url = image_url;
		this._item_url = item_url;
		this._webview_height_ratio = webview_height_ratio;
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
	
	set webview_height_ratio(webview_heigth_ratio) {
		this._webview_height_ratio = webview_heigth_ratio;
	}
	get webview_height_ratio() {
		return this._webview_height_ratio;
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
				webview_height_ratio: this._webview_height_ratio
			},
			buttons: this._buttons
		};
	}
}

module.exports = ItemCard;