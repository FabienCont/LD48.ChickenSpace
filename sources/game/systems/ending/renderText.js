function renderText(entity) {

     const scoreComponent = entity.get('score');
     const positionComponent = entity.get ('position');

     this.context.lineWidth = 2;
     this.context.font="20px Arial";
     this.context.strokeStyle = 'black';
     this.context.strokeText("Score : "+scoreComponent.total,positionComponent.x,positionComponent.y);

}

export {renderText};
