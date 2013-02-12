( function ( $ ) {
	'use strict';

	var myKbd = {
		id: 'my-kbd',
		name: 'Myanmar kbd',
		description: 'Myanmar kbd keyboard layout',
		date: '2013-02-12',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
  			["1", "\u1041"],
			["\\!", "\u100D"],
			["2", "\u1042"],
			["3", "\u1043"],
			["\\#", "\u100B"],
			["4", "\u1044"],
			["5", "\u1045"],
			["6", "\u1046"],
			["7", "\u1047"],
			["\\&", "\u101B"],
			["8", "\u1048"],
			["\\*", "\u1002"],
			["9", "\u1049"],
			["0", "\u1040"],
			["\\)", "\u101D"],
			["q", "\u1006"],
			["Q", "\u104D"],
			["w", "\u1010"],
			["e", "\u1014"],
			["r", "\u1019"],
			["t", "\u1021"],
			["y", "\u1015"],
			["u", "\u1000"],
			["i", "\u1004"],
			["o", "\u101E"],
			["O", "\u1025"],
			["p", "\u1005"],
			["P", "\u100F"],
			["\\[", "\u101F"],
			["\\{", "\u100E"],
			["\\]", "\u1009"],
			["\\}", "\u1027"],
			["\\\\", "\u104F"],
			["a", "\u1031"],
			["A", "\u1017"],
			["s", "\u1039 \u101A"],
			["S", "\u1039 \u101F"],
			["d", "\u102D"],
			["D", "\u102E"],
			["f", "\u1039"],
			["F", "\u200D"],
			["g", "\u200C"],
			["G", "\u1039 \u101D"],
			["h", "\u1037"],
			["H", "\u1036"],
			["j", "\u1039 \u101B"],
			["J", "\u1032"],
			["k", "\u102F"],            
			["l", "\u1030"],
			[";", "\u1038"],
			["'", "\u1012"],
			["\"", "\u1013"],
			["z", "\u1016"],
			["Z", "\u1007"],
			["x", "\u1011"],
			["X", "\u100C"],
			["c", "\u1001"],
			["C", "\u1003"],
			["v", "\u101C"],
			["V", "\u1020"],
			["b", "\u1018"],
			["n", "\u100A"],
			["m", "\u102C"],
			[",", "\u101A"],
			["\\<", "\u104D"],
			["\\.", "\u1008"],
			["\\>", "\u1024"],
			["/", "\u104B"]
 		],
		patterns_x: [
		        ["g", "\u104C"],
			["h", "\u104D"],
			["j", "\u104E"],
			["k", "\u1024"]]
	};
	$.ime.register( myKbd );

}( jQuery ) );

