function CodeSampleAnimation() {
	this._width = 500;
	this._height = 300;
	this._logoRadius = 96;
	this._path = new SvgPathString();
	this._snapCanvas = Snap( this._width, this._height ).appendTo( Snap( '#code-samples .svg-canvas' ) );
	this._center = { x: this._width / 2, y: this._height / 2 };
	var p = -Math.PI / 3;
	this._items = {
		phone: {
			a: { x: 80, y: 80 },
			b: this._getPointInCircle( p * 2 )
		},
		server: {
			a: { x: 80, y: 230 },
			b: this._getPointInCircle( p * 2 )
		},
		desktop: {
			a: { x: 420, y: 80 },
			b: this._getPointInCircle( p * 4 )
		},
		cloud: {
			a: { x: 420, y: 230 },
			b: this._getPointInCircle( p * 5 )
		}
	};

//	this._showMessage( this._items.phone, function(){});
}

CodeSampleAnimation.prototype._showMessage = function( item, callback ) {
	var circle = this._snapCanvas.circle( item.a.x, item.a.y, 3 );
	circle.attr({ fill: '#0FBBEC' });
	circle.animate({ cx: item.b.x, cy: item.b.y }, 1000, callback );
};

CodeSampleAnimation.prototype._draw = function() {
	for( var key in this._items ) {
		this._path.new();
		this._path.m( this._items[ key ].a );
		this._path.l( this._items[ key ].b );
		this._snapCanvas.path( this._path.get() ).attr({ 'stroke': 'red' });
	}
};

CodeSampleAnimation.prototype._getPointInCircle = function( angle ) {
	return {
		x: this._center.x + Math.sin( angle ) * this._logoRadius,
		y: this._center.y + Math.cos( angle ) * this._logoRadius
	};
};