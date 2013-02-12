( function ( $ ) {
	'use strict';

	var ksKbd = {
		id: 'ks-Kbd',
		name: 'Kbd',
		description: 'Kbd keyboard for Kashmiri language using Arabic script',
		date: '2013-02-09',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			["\\~", "ٓ"],
			["\\!", "!"],
			["1", "۱"],
			["\\@", "@"],
			["2", "۲"],
			["\\#", "#"],
			["3", "۳"],
			["\\$", "$"],
			["4", "۴"],
			["5", "۵"],
			["6", "۶"],
			["7", "۷"],
			["8", "۸"],
			["\\(", ")"],
			["9", "۹"],
			["\\)", "("],
			["0", "۰"],
			["\\_", "ّ"],
			["\\-", "-"],
			["\\+", "+"],
			["\\=", "="],
			["Q", "ﷺ"],
			["q", "ق"],
			["W", "ؤ"],
			["w", "و"],
			["E", "ئ"],
			["e", "ع"],
			["R", "ڑ"],
			["r", "ر"],
			["T", "ٹ"],
			["t", "ت"],
			["Y", "؁"],
			["y", "ے"],
			["U", "،"],
			["u", "ء"],
			["I", "ۆ"],
			["i", "ی"],
			["O", "ۃ"],
			["o", "ہ"],
			["P", "إ"],
			["p", "پ"],
			["\\{", "ٰ"],
			["\\[", "]"],
			["\\}", "ٰ"],
			["\\]", "["],
			["A", "آ"],
			["a", "ا"],
			["S", "ش"],
			["s", "س"],
			["D", "ڈ"],
			["d", "د"],
			["F", "ُ"],
			["f", "ف"],
			["G", "غ"],
			["g", "گ"],
			["H", "ح"],
			["h", "ھ"],
			["J", "ژ"],
			["j", "ج"],
			["K", "خ"],
			["k", "ک"],
			["L", "ؓ"],
			["l", "ل"],
			[":", ":"],
			[";", "؛"],
			["\"", "\""],
			["'", "ٰ"],
			["\\|", "أ"],
			["\\\\", "؎"],
			["\\~", "ً"],
			["`", "ٍ"],
			["Z", "ذ"],
			["z", "ز"],
			["X", "ض"],
			["x", "ص"],
			["C", "ث"],
			["c", "چ"],
			["V", "ظ"],
			["v", "ط"],
			["B", "أ"],
			["b", "ب"],
			["N", "ں"],
			["n", "ن"],
			["M", "ٔ"],
			["m", "م"],
			["\\>", "َ"],
			[",", "،"],
			["\\<", "ِ"],
			["\\.", "۔"],
			["\\?", "؟"],
			["/", "/"],
			["\\%", "%"],
			["\\^", "^"],
			["\\&", "&"],
			["\\*", "*"]]
	};

	$.ime.register( ksKbd );

}( jQuery ) );
