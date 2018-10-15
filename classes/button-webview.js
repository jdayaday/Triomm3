const TYPE = 'web_url';

class Button {
	
	constructor(text, url, webview_height_ratio) {
		this._type = TYPE;
		this._text = text;
        this._url = url;
        this._webview_height_ratio = webview_height_ratio;
	}
	
	set text(text) {
		this._text = text;
	}
	get text() {
		return this._text;
	}
	
	set url(url) {
		this._url = url;
	}
	get url() {
		return this._url;
    }
    
    set webview_height_ratio(value) {
        this._webview_height_ratio = value;
    }
    get webview_height_ratio() {
        return this._webview_height_ratio;
    }
	
	toJSON() {
		return {
			type: this._type,
			title: this._text,
            url: this._url,
            webview_height_ratio: this._webview_height_ratio
		};
	}
}

module.exports = Button;