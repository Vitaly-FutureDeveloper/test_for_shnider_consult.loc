const pathSrc = "src";
const pathDest = "public";

export default {
	root: pathDest,

	html: {
		src: pathSrc + "/html/*.pug",
		watch: pathSrc + "/html/**/*.pug",
		dest: pathDest,
	},

	styles: {
		src: pathSrc + "/styles/*.{scss,sass,css}",
		watch: pathSrc + "/styles/**/*.{scss,sass,css}",
		dest: pathDest + "/styles",
		stream: pathDest + "/styles/*.css"
	},

	scripts: {
		src: pathSrc + "/scripts/*.js",
		watch: pathSrc + "/scripts/**/*.js",
		dest: pathDest + "/scripts",
		stream: pathDest + "/scripts/*.js"
	},

	img: {
		src: pathSrc + "/assets/img/*.{png,jpg,jpeg,gif,svg,ico}",
		watch: pathSrc + "/assets/img/**/*.{png,jpg,jpeg,gif,svg,ico}",
		dest: pathDest + "/assets/img",
	}
}