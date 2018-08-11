function gravity(entity) {

  const positionComponent = entity.get('position');
  const velocityComponent = entity.get('velocity');

  positionComponent.y = (positionComponent.y +(2*velocityComponent.vy));

  if(velocityComponent.vy<=velocityComponent.vyMax){
    velocityComponent.vy+=(0.3);
    }

  }
  export {gravity};
