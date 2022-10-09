import Swiper from 'swiper';
import {addDateToHTML} from "./module/addDayDateToText.js";

new Swiper('.swiper',{
	direction: 'horizontal',
	loop: true,
	grabCursor: true,
	delay: 1000,
	speed: 800,
	effect: 'slide',
});



addDateToHTML.setMonday(".js-date");
