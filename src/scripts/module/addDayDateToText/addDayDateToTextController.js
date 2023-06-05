import {AddDayDateToTextModel} from "./addDayDateToTextModel.js";

export class AddDayDateToTextController {
	constructor() {
		this.model = new AddDayDateToTextModel();
	}

	setDate(){
		return this.model.setValueDate();
	}
}