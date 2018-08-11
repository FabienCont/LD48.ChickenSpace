import {Position} from 'components/position.js';
import {Run} from 'components/run.js';

function movement(entity) {

  const directionComponent = entity.get('direction');
  const inputComponent = entity.get('input');
  const positionComponent = entity.get('position');

  if ( entity.has(['run']) && directionComponent.direction === 'LEFT') {
    positionComponent.x -= 4;
  }else if( entity.has(['run']) && directionComponent.direction === 'RIGHT'){
    positionComponent.x += 4;
  }

}
export {movement};
