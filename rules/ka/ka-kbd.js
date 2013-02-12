( function ( $ ) {
	'use strict';

	var kaKbd = {
		id: 'ka-kbd',
		name: 'Georgian kbd',
		description: 'Georgian kbd keyboard layout',
		date: '2013-02-12',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[".k", "კ"],
			[".p", "პ"],
			["+z", "ჟ"],
			[".t", "ტ"],
			[".g", "ღ"],
			["+s", "შ"],
			[".+c", "ჭ"],
			["+c", "ჩ"],
			[".c", "წ"],
			["+j", "ჯ"],
			["ყ1", "ჴ"],
			["ე0", "ჱ"],
			["ო1", "ჵ"],
			["ი1", "ჲ"],
			["a", "ა"],
			["b", "ბ"],
			["g", "გ"],
			["d", "დ"],
			["e", "ე"],
			["v", "ვ"],
			["z", "ზ"],
			["t", "თ"],
			["i", "ი"],
			["l", "ლ"],
			["m", "მ"],
			["n", "ნ"],
			["o", "ო"],
			["r", "რ"],
			["s", "ს"],
			["u", "უ"],
			["p", "ფ"],
			["k", "ქ"],
			["q", "ყ"],
			["c", "ც"],
			["j", "ძ"],
			["x", "ხ"],
			["h", "ჰ"],
			["w", "ჳ"],
			["f", "ჶ"]]
	};
	$.ime.register( kaKbd );

}( jQuery ) );

