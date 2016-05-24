$(function() {
	// var header = $( 'header' );
	// header.mousemove(function(e){
	// 	var x = 100 - ( e.offsetX / header.width() ) * 100;
	// 	var y = 100 - ( e.offsetY / header.height() ) * 100;
	// 	header.css( 'perspective-origin', x + '% ' + y + '%' );
	// })


	function applySizes() {
		var windowHeight = $(window).height();
		var navHeight = $( 'nav' ).height();
		var conceptSelectHeight = $( '#concept-select' ).height();
		// $( 'header' ).height( windowHeight - ( navHeight + conceptSelectHeight ) );
				// $( 'header' ).height( windowHeight - ( navHeight + conceptSelectHeight ) );
		 $( 'header' ).height( windowHeight - 162 );
	}

	applySizes();
	$(window).load(applySizes);
	$(window).load(function(){
		$('#loading-cover').fadeOut( 600 );
	});
	$(window).resize( applySizes );
	new CodeSampleAnimation();

	var claims = [
		'deepstream.io helps teams build collaboration apps',
		'deepstream.io helps data-analysts create realtime dashboards',
		'deepstream.io helps studios develop multiplayer games',
		'deepstream.io helps traders receive low latency prices',
		'deepstream.io helps iot companies aggregate sensor data',
		'deepstream.io helps rangers track wildlife data',
		'deepstream.io helps developers build messaging platforms'
	];
	var claimIndex = 0;
	var claimElement = $('#claim');
	setInterval(function(){
		claimElement.fadeOut(500, function(){
			claimIndex = claims[ claimIndex + 1 ] ? claimIndex + 1 : 0;
			claimElement.text( claims[ claimIndex ] );
			claimElement.fadeIn( 300 );
		});
	}, 6000 );
return;
	new DsLogo( 'nav .logo .container', {
		radius: 27,
		ballRadius: 2,
		angleOffset: 0.3,
		cX: 30,
		cY: 30,
		attrD: {
		//	stroke: 'rgba(255,255,255,0.8)',
		//	fill: 'rgba(255,255,255,0.4)',
			stroke: "#83ddf7",
			fill: "#83ddf7",
			fillRule: 'evenodd',
			strokeWidth: 3
		},
		attrS: {
			stroke: '#0FBBEC',
		//	fill: 'rgba(255,255,255,0.3)',
			fill: '#0FBBEC',
			fillRule: 'evenodd',
			strokeWidth: 3,
			'stroke-alignment': 'inner'
		}
	});

return;

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
