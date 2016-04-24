$(function() {
	new CodeSampleAnimation();

	return;
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

	var codeSampleLogo = new DsLogo( '#code-samples .ds-logo', {
		radius: 96,
		ballRadius: 12,
		angleOffset: 0.5,
		cX: 110,
		cY: 110,
		attrD: {
		//	stroke: 'rgba(255,255,255,0.8)',
		//	fill: 'rgba(255,255,255,0.4)',
			stroke: "gradient:l(0, 0, 1, 1)#61D9FB-#39CDF7",
			fill: '#fff',
			fillRule: 'evenodd',
			strokeWidth: 2
		},
		attrS: {
			stroke: 'gradient:l(0, 0, 1, 1)#8CE3FC-#0FBBEC',
		//	fill: 'rgba(255,255,255,0.3)',
			fill: 'none',
			fillRule: 'evenodd',
			strokeWidth: 2,
			'stroke-alignment': 'inner'
		}
	});

	// var gradientA = 'gradient:l(0, 0, 1, 1)#8CE3FC-#0FBBEC';
	// var gradientB = 'gradient:l(0, 0, 1, 1)#61D9FB-#39CDF7';
	// var iteration = 0;

	// function nextAnim() {
	// 	iteration++;
	// 	codeSampleLogo.animate(
	// 	{ 'stroke': iteration % 2 === 0 ? gradientA : gradientB },
	// 	{ 'stroke': iteration % 2 === 0 ? gradientB : gradientA },
	// 	1000,
	// 	nextAnim);
	// }

	// nextAnim();

});
