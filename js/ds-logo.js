function DsLogo( snapCanvas ) {
	this._snapCanvas = snapCanvas;
	this._settings = {
		radius: 150,
		ballRadius: 15,
		angleOffset: 0.3,
		cX: 200,
		cY: 200
	};
	this._drawD();
	this._drawS();

	//this._points = this._calculatePoints();
	//this._draw();
}


DsLogo.prototype._drawS = function() {
	var c = this._getCoords( this._settings.angleOffset );
	var pathString = '';

	pathString += 'M' + c[ 3 ].a.x + ',' + c[ 3 ].a.y;
	pathString += 'L' + c[ 3 ].b.x + ',' + c[ 3 ].b.y;
	pathString += 'L' + c[ 1 ].ca.x + ',' + c[ 1 ].ca.y;

	this._snapCanvas.circle( c[ 3 ].cb.x, c[ 3 ].cb.y, 15 );

	this._snapCanvas.path( pathString ).attr({
		fill: 'none',
		stroke: '#F0F',
		strokeWidth: 2
	});
};


DsLogo.prototype._createPathStringForD = function( oA ) {
	var r = this._settings.ballRadius;
	var coords = this._getCoords( oA ).slice(0, 3);

	var caX = this._settings.cX + Math.sin( Math.PI ) * this._settings.radius;
	var caY = this._settings.cY + Math.cos( Math.PI ) * this._settings.radius;

	var paX = caX + r * Math.cos( ( Math.PI * 0.5 ) + oA );
	var paY = caY + r * Math.sin( ( Math.PI * 0.5 ) + oA );

	var cbX = this._settings.cX + 0 * this._settings.radius;
	var cbY = this._settings.cY + 1 * this._settings.radius;

	var pbX = cbX + r * Math.cos( Math.PI * -0.5 - oA );
	var pbY = cbY + r * Math.sin( Math.PI * -0.5 - oA );

	coords.push({
		a: { x: paX, y: paY },
		b: { x: pbX, y: pbY }
	});

	var pathString = '';
	var i, a, b;


	for( i = 0; i < coords.length; i++ ) {
		a = coords[ i ].a;
		b = coords[ i ].b;

		if( i === 0 ) {
			pathString += 'M' + a.x + ',' + a.y;
		} else {
			pathString += 'A' + r + ' ' + r + ' 0 ' + ( oA < 0 ? '0 1' : '1 0' ) + ' ' + a.x + ' ' + a.y;
		}

		pathString += 'L' + b.x + ',' + b.y;
	}

	pathString += 'A' + r + ' ' + r + ' 0 ' + ( oA < 0 ? '0 1' : '1 0' ) + ' ' + coords[ 0 ].a.x + ' ' + coords[ 0 ].a.y;

	return pathString;
};

DsLogo.prototype._drawD = function() {
	var pathString = this._createPathStringForD( this._settings.angleOffset );
	pathString += this._createPathStringForD( this._settings.angleOffset * -1 );

	this._snapCanvas.path( pathString ).attr({
		'stroke': 'rgba(255,255,255,0.8)',
		'fill': 'rgba(255,255,255,0.4)',
		'fillRule': 'evenodd',
		'strokeWidth': 2
	});
};

DsLogo.prototype._getCoords = function( oA ) {
	var i, a, caX, caY,
		paX, paY, cbX, cbY, pbX, pbY,
		thetaA,  thetaB;

	var r = this._settings.radius;
	var circleR = this._settings.ballRadius;
	var cX = this._settings.cX;
	var cY = this._settings.cY;

	var sin = Math.sin;
	var cos = Math.cos;
	var atan2 = Math.atan2;
	var PI = Math.PI;

	var coords = [];

	for( i = 0; i < 6; i++ ) {

		a = i * PI / 3;

		caX = cX + sin( a ) * r;
		caY = cY + cos( a ) * r;

		cbX = cX + sin( a + ( PI / 3 ) ) * r;
		cbY = cY + cos( a + ( PI / 3 ) ) * r;

		thetaA = atan2( cbY - caY, cbX - caX ) + oA;

		paX = caX + circleR * cos( thetaA );
		paY = caY + circleR * sin( thetaA );

		thetaB = atan2( caY - cbY, caX - cbX ) + oA * -1;

		pbX = cbX + circleR * cos( thetaB );
		pbY = cbY + circleR * sin( thetaB );

		coords.push({
			a: { x: paX, y: paY },
			b: { x: pbX, y: pbY },
			ca: { x: caX, y: caY },
			cb: { x: cbX, y: cbY }
		});
	}

	return coords;
};