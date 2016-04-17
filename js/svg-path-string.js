function SvgPathString( ballRadius ) {
	this._r = ballRadius;
	this._pathString = '';
}

SvgPathString.prototype.new = function() {
	this._pathString = '';
	return this;
};

SvgPathString.prototype.get = function() {
	return this._pathString;
};

SvgPathString.prototype.m = function( target ) {
	this._pathString += 'M' + target.x + ',' + target.y;
	return this;
};

SvgPathString.prototype.l = function( target ) {
	this._pathString += 'L' + target.x + ',' + target.y;
	return this;
};

SvgPathString.prototype.a = function( oA, target ) {
	this._pathString += 'A' + this._r + ' ' + this._r + ' 0 ' + ( oA < 0 ? '0 1' : '1 0' );
	this._pathString += ' ' + target.x + ' ' + target.y;
	return this;
};