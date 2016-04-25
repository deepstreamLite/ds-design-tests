$(function() {
	function applySizes() {
		var windowHeight = $(window).height();
		var navHeight = $( 'nav' ).height();
		var conceptSelectHeight = $( '#concept-select' ).height();
		// $( 'header' ).height( windowHeight - ( navHeight + conceptSelectHeight ) );
				// $( 'header' ).height( windowHeight - ( navHeight + conceptSelectHeight ) );
		 $( 'header' ).height( windowHeight - 241 );
	}

	applySizes();
	$(window).load(applySizes);
	$(window).load(function(){
		$('#loading-cover').fadeOut( 600 );
	});
	$(window).resize( applySizes );
	new CodeSampleAnimation();
return;

	new DsLogo( 'nav .logo .container', {
		radius: 18,
		ballRadius: 1.7,
		angleOffset: 0.3,
		cX: 25,
		cY: 25,
		attrD: {
		//	stroke: 'rgba(255,255,255,0.8)',
		//	fill: 'rgba(255,255,255,0.4)',
			stroke: "#46D3FA",
			fill: "#46D3FA",
			fillRule: 'evenodd',
			strokeWidth: 1.2
		},
		attrS: {
			stroke: '#0FBBEC',
		//	fill: 'rgba(255,255,255,0.3)',
			fill: '#0FBBEC',
			fillRule: 'evenodd',
			strokeWidth: 1.2,
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
