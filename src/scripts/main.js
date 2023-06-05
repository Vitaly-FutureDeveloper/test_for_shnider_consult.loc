import Swiper from 'swiper';
import {AddDayDateToTextView} from "./module/addDayDateToText/addDayDateToTextView.js";

new Swiper('.swiper',{
	direction: 'horizontal',
	loop: true,
	grabCursor: true,
	delay: 1000,
	speed: 800,
	effect: 'slide',
});

const dateView = new AddDayDateToTextView(document.querySelector(".header__title"));
dateView.render();
