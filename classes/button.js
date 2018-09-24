class Button {
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
}

module.exports = Button;