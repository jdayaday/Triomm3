const TYPE = 'postback';

class Button {
	
	constructor(text, value) {
		this._type = TYPE;
		this._text = text;
		this._value = value;
	}
	
	set text(text) {
		this._text = text;
	}
	get text() {
		return this._text;
	}
	
	set value(value) {
		this._value = value;
	}
	get value() {
		return this._value;
	}
	
	toJSON() {
		return {
			type: this._type,
			title: this._text,
			payload: this._value
		};
	}
}

module.exports = Button;