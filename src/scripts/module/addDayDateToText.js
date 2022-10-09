export class addDateToHTML {
	static _getDateNextMonday() {
		const date = new Date();
		let targetDate = new Date();
		if(date.getDay()) {
			targetDate.setDate(date.getDate() + 8 - date.getDay())
		} else {
			targetDate.setDate(date.getDate() + 1)
		}

		return targetDate;
	}

	static setMonday(selector){
		const dateBlock = document.querySelector(selector);
		const date = this._getDateNextMonday().toLocaleDateString().trim();
		dateBlock.textContent = date;
	}
};