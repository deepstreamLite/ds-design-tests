function DsLogo( snapCanvas, settings ) {
	this._snapCanvas = snapCanvas;
	this._settings = this._extendSettings( settings );
	this._path = new SvgPathString( this._settings.ballRadius );
	this._drawD();
	this._drawS();
}

DsLogo.prototype._extendSettings = function( settings ) {
	var defaultSettings = {
		radius: 150,
		ballRadius: 18,
		angleOffset: 0.5,
		cX: 200,
		cY: 200,
		attrD: {
			stroke: 'rgba(255,255,255,0.8)',
			fill: 'rgba(255,255,255,0.4)',
			fillRule: 'evenodd',
			strokeWidth: 2
		},
		attrS: {
			fill: 'none',
			stroke: '#F0F',
			strokeWidth: 2
		}
	};

	for( var key in settings ) {
		defaultSettings[ key ] = settings[ key ];
	}

	return defaultSettings;
};

DsLogo.prototype._drawS = function() {
	var c = this._getCoords( this._settings.angleOffset );
	var coords = this._circleToLineCoords( c[ 3 ].cb, c[ 1 ].ca, this._settings.angleOffset );

	this._snapCanvas.circle( c[ 3 ].cb.x, c[ 3 ].cb.y, this._settings.ballRadius );

	this._path.new().m( c[ 3 ].a ).l( c[ 3 ].b );
	this._path.a( this._settings.angleOffset, coords.a ).l( coords.b );

	this._snapCanvas.path( this._path.get() ).attr( this._settings.attrS );
};

DsLogo.prototype._createPathStringForD = function( oa ) {
	var i;
	var c = this._getCoords( oa ).slice(0, 3);

	c.push( this._circleToLineCoords( c[ 2 ].cb, c[ 0 ].ca, oa ) );

	for( i = 0; i < c.length; i++ ) {
		if( i === 0 ) {
			this._path.m( c[ i ].a );
		} else {
			this._path.a( oa, c[ i ].a );
		}

		this._path.l( c[ i ].b );
	}

	this._path.a( oa, c[ 0 ].a );
};

DsLogo.prototype._drawD = function() {
	this._path.new();
	this._createPathStringForD( this._settings.angleOffset );
	this._createPathStringForD( this._settings.angleOffset * -1 );
	this._snapCanvas.path( this._path.get() ).attr( this._settings.attrD );
};

DsLogo.prototype._circleToLineCoords = function( ca, cb, oa ) {
	var r = this._settings.ballRadius;
	var thetaA = Math.atan2( cb.y - ca.y, cb.x - ca.x ) + oa;
	var thetaB = Math.atan2( ca.y - cb.y, ca.x - cb.x ) + oa * -1;

	return {
		a: { x: ca.x + r * Math.cos( thetaA ), y: ca.y + r * Math.sin( thetaA ) },
		b: { x: cb.x + r * Math.cos( thetaB ), y: cb.y + r * Math.sin( thetaB ) },
		ca: { x: ca.x, y: ca.y },
		cb: { x: cb.x, y: cb.y }
	};
};

DsLogo.prototype._getCoords = function( oa ) {

	var i, a, ca, cb;
	var r = this._settings.radius;
	var cX = this._settings.cX;
	var cY = this._settings.cY;
	var coords = [];

	for( i = 0; i < 6; i++ ) {
		a = i * Math.PI / 3;

		ca = {
			x: cX + Math.sin( a ) * r,
			y: cY + Math.cos( a ) * r
		};

		cb = {
			x: cX + Math.sin( a + ( Math.PI / 3 ) ) * r,
			y: cY + Math.cos( a + ( Math.PI / 3 ) ) * r
		};

		coords.push( this._circleToLineCoords( ca, cb, oa ) );
	}

	return coords;
};