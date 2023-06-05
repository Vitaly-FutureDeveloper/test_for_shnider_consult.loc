import {AddDayDateToTextController} from "./addDayDateToTextController.js";

export class AddDayDateToTextView {
	constructor(element) {
		this.element = element;
		this.controller = new AddDayDateToTextController();

		this.span = document.createElement('span');
		this.span.textContent = 'Распродажа до !';

		this.bindListeners();
		this.onRenderValueDate();
	}

	bindListeners() {
		this.span.addEventListener('click', this.onRenderValueDate.bind(this));
	}

	onRenderValueDate(){
		this.updateDateTitle(this.controller.setDate())
	}

	updateDateTitle(valueDate){
		this.span.textContent = `Распродажа до ${valueDate}!`;
	}

	render(){
		this.element.appendChild(this.span);
	}
}