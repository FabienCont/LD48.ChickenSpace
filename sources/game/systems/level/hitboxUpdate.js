function hitboxUpdate(entity) {

  const positionComponent = entity.get('position');
  const hitboxComponent = entity.get('hitbox');

  hitboxComponent.rectangle.x=positionComponent.x;
  hitboxComponent.rectangle.y=positionComponent.y;

}
export {hitboxUpdate};
