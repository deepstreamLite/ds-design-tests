function DsLogo( selector, settings ) {
	this._settings = this._extendSettings( settings );
	this._dimensions = 10 + this._settings.radius * 2 + this._settings.ballRadius * 2;
	this._snapCanvas = Snap( this._dimensions, this._dimensions ).appendTo( Snap( selector ) );
	this._processAttr( this._settings.attrD );
	this._processAttr( this._settings.attrS );
	this._cO = this._getCoords( this._settings.angleOffset );
	this._cI = this._getCoords( this._settings.angleOffset * -1 );
	this._path = new SvgPathString( this._settings.ballRadius );
	this._s = null;
	this._d = null;
	this._drawS();
	this._drawD();
}

DsLogo.prototype._extendSettings = function( settings ) {

	var defaultSettings = {
		radius: 150,
		ballRadius: 18,
		angleOffset: 0.5,
		cX: 200,
		cY: 200,
		attrD: {
		//	stroke: 'rgba(255,255,255,0.8)',
		//	fill: 'rgba(255,255,255,0.4)',
			stroke: 'red',
			fill: 'none',
			fillRule: 'evenodd',
			strokeWidth: 2
		},
		attrS: {
			stroke: 'blue',
		//	fill: 'rgba(255,255,255,0.3)',
			fill: 'none',
			fillRule: 'evenodd',
			strokeWidth: 2,
			'stroke-alignment': 'inner'
		}
	};

	for( var key in settings ) {
		defaultSettings[ key ] = settings[ key ];
	}

	return defaultSettings;
};

DsLogo.prototype.animate = function( attrD, attrS, duration ) {
	this._s.animate( this._processAttr( attrS ), duration );
	this._d.animate( this._processAttr( attrD ), duration );
};

DsLogo.prototype._processAttr = function( attr ) {
	if( attr.fill ) {
		attr.fill = this._processColor( attr.fill );
	}
	if( attr.stroke ) {
		attr.stroke = this._processColor( attr.stroke );
	}

	return attr;
};

DsLogo.prototype._processColor = function( color ) {
	if( color.indexOf( 'gradient:' ) === -1 ) {
		return color;
	} else {
		return this._snapCanvas.gradient( color.replace( 'gradient:', '' ) );
	}
};

DsLogo.prototype._calculateCornerCoords = function() {
	var coords = this._circleToLineCoords( this._cO[ 3 ].cb, this._cO[ 1 ].ca, this._settings.angleOffset );
	var height = coords.b.y - coords.a.y;
	var width = coords.b.x - coords.a.x;
	var f = 1 - ( this._getWidth() / Math.sqrt( Math.pow( height, 2 ) + Math.pow( width, 2 ) ) );

	this._cornerCoords = {
		x: coords.a.x + width * f,
		y: coords.a.y + height * f
	};
};

DsLogo.prototype._drawS = function() {
	this._path.new();
	this._calculateCornerCoords();

	//Outer Line
	var c = this._cO;
	var coords = this._circleToLineCoords( c[ 3 ].cb, c[ 1 ].ca, this._settings.angleOffset );
	this._path.m( this._cI[ 3 ].a );
	this._path.a( '0 1', c[ 3 ].a );
	this._path.l( c[ 3 ].b ).a( this._settings.angleOffset, coords.a );
	this._path.l( this._cornerCoords );

	//Inner Line
	c = this._cI;
	coords = this._circleToLineCoords( c[ 3 ].cb, c[ 1 ].ca, this._settings.angleOffset * -1 );
	this._path.m( c[ 3 ].a );
	this._path.l( c[ 3 ].b ).a( this._settings.angleOffset * -1, coords.a );
	this._path.l( coords.b );
	this._path.a( '0 0', c[ 0 ].b );
	this._path.l( c[ 0 ].a );
	this._path.l({ x: c[ 0 ].a.x, y: c[ 0 ].a.y - this._getWidth() });
	this._path.l( this._cornerCoords );

	//draw
	this._s = this._snapCanvas.path( this._path.get() );
	this._s.attr( this._settings.attrS );
};

DsLogo.prototype._createPathStringForD = function( oa ) {
	var i;
	var c = ( oa > 0 ? this._cO : this._cI ).slice(0, 3);

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
	this._d = this._snapCanvas.path( this._path.get() );
	this._d.attr( this._settings.attrD );
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

DsLogo.prototype._getWidth = function() {
	var ax = this._settings.ballRadius * Math.sin( 0 );
	var ay = this._settings.ballRadius * Math.cos( 0 );
	var bx = this._settings.ballRadius * Math.sin( this._settings.angleOffset * 2 );
	var by = this._settings.ballRadius * Math.cos( this._settings.angleOffset * 2 );
	return Math.sqrt( Math.pow( bx - ax, 2 ), Math.pow( by - ay, 2 ) );
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