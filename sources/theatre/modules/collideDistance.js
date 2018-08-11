function collideDistance(rectangle, otherRectangle) {

  var collision= {x:0 , y:0} ;

      var deltaX = ( rectangle.x + ( rectangle.width / 2 ) ) - ( otherRectangle.x + ( otherRectangle.width / 2 ) );
  		var deltaY = ( rectangle.y + ( rectangle.height / 2 ) ) - ( otherRectangle.y + ( otherRectangle.height / 2 ) );

  		var middleCenterDistanceX = ( rectangle.width / 2 ) + ( otherRectangle.width / 2 );
  		var middleCenterDistanceY = ( rectangle.height / 2 ) + ( otherRectangle.height / 2 );
  		var colDir = null;

  		if( Math.abs( deltaX ) < middleCenterDistanceX && Math.abs( deltaY ) < middleCenterDistanceY ) {

  			if( collision.active === false )
  				collision.active = true;

  			var oX = middleCenterDistanceX - Math.abs( deltaX ),
  				oY = middleCenterDistanceY - Math.abs( deltaY );
  			if( oX >= oY ) {
  				if( deltaY > 0 ) {
  				      collision.y=oY;
  				} else {
  	          collision.y=-oY;
  				}
  			}
  			else {
  				if ( deltaX > 0 ) {
  	          collision.x=oX;
  				}
  				else {
  	          collision.x=-oX;
  				}
  			}
  		}

    return collision;
};

export {collideDistance};
