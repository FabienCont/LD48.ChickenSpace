import {Position} from 'components/position.js';
import {Run} from 'components/run.js';
import {Hitbox} from 'components/hitbox';

function movement(entity) {

  const directionComponent = entity.get('direction');
  const inputComponent = entity.get('input');
  const positionComponent = entity.get('position');
  const hitboxComponent = entity.get('hitbox');

  if ( entity.has(['run']) && directionComponent.direction === 'LEFT') {

    var defaultMovement =5;
    if(positionComponent.x -5< 0){
      defaultMovement=(positionComponent.x +5);
    }
    positionComponent.x =positionComponent.x-defaultMovement,positionComponent.y;

  }else if( entity.has(['run']) && directionComponent.direction === 'RIGHT'){

    var defaultMovement =5;
    if(positionComponent.x +5+hitboxComponent.rectangle.width > this.size.width){
      defaultMovement=this.size.width -(positionComponent.x + hitboxComponent.rectangle.width) ;
    }
    positionComponent.x =positionComponent.x + defaultMovement;

  }

}
export {movement};
