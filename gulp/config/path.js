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
		src: pathSrc + "/styles/*.scss",
		watch: pathSrc + "/styles/**/*.scss",
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
		src: pathSrc + "/assets/img/*.{png,jpg,jpeg,gif,svg}",
		watch: pathSrc + "/assets/img/**/*.{png,jpg,jpeg,gif,svg}",
		dest: pathDest + "/assets/img",
	}
}