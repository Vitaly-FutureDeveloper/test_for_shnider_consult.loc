export class AddDayDateToTextModel {
	constructor() {
		this.valueDate = 0;
	}

	_getDateNextMonday() {
		const date = new Date();
		let targetDate = new Date();
		if(date.getDay()) {
			targetDate.setDate(date.getDate() + 8 - date.getDay())
		} else {
			targetDate.setDate(date.getDate() + 1)
		}

		return targetDate;
	}

	setValueDate() {
		this.valueDate = this._getDateNextMonday().toLocaleDateString().trim();
		return this.valueDate;
	}
}