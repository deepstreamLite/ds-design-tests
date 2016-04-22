window.onload = function() {

	new DsLogo( 'nav .logo .container', {
		radius: 16,
		ballRadius: 1.8,
		angleOffset: 0.3,
		cX: 17,
		cY: 18,
		attrD: {
		//	stroke: 'rgba(255,255,255,0.8)',
		//	fill: 'rgba(255,255,255,0.4)',
			stroke: "#ddd",
			fill: "#ddd",
			fillRule: 'evenodd',
			strokeWidth: 0.8
		},
		attrS: {
			stroke: 'gradient:l(0, 0, 1, 1)#8CE3FC-#0FBBEC',
		//	fill: 'rgba(255,255,255,0.3)',
			fill: 'gradient:l(0, 0, 1, 1)#8CE3FC-#0FBBEC',
			fillRule: 'evenodd',
			strokeWidth: 0.8,
			'stroke-alignment': 'inner'
		}
	});

	// new DsLogo( 'header .logo', {
	// 	radius: 88,
	// 	ballRadius: 12,
	// 	angleOffset: 0.5,
	// 	cX: 100,
	// 	cY: 102,
	// 	attrD: {
	// 	//	stroke: 'rgba(255,255,255,0.8)',
	// 	//	fill: 'rgba(255,255,255,0.4)',
	// 		stroke: "gradient:l(0, 0, 1, 1)#61D9FB-#39CDF7",
	// 		fill: '#fff',
	// 		fillRule: 'evenodd',
	// 		strokeWidth: 2
	// 	},
	// 	attrS: {
	// 		stroke: 'gradient:l(0, 0, 1, 1)#8CE3FC-#0FBBEC',
	// 	//	fill: 'rgba(255,255,255,0.3)',
	// 		fill: 'none',
	// 		fillRule: 'evenodd',
	// 		strokeWidth: 2,
	// 		'stroke-alignment': 'inner'
	// 	}
	// });
};
