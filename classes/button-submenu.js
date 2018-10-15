const TYPE = 'nested';

// Helper function
function arrayToJSON(elements) {
    const objArray = [];

    elements.forEach(element => {
        objArray.push(element.toJSON());
    });

    return objArray;
};

class Button {
	
	constructor(text, buttons) {
		this._type = TYPE;
		this._text = text;
		this._buttons = buttons;
	}
	
	set text(text) {
		this._text = text;
	}
	get text() {
		return this._text;
	}
	
	set buttons(value) {
		this._buttons = value;
	}
	get buttons() {
		return this._buttons;
	}
	
	toJSON() {
		return {
			type: this._type,
			title: this._text,
			call_to_actions: arrayToJSON(this._buttons)
		};
	}
}

module.exports = Button;