function renderText(entity) {

     const scoreComponent = entity.get('score');
     const positionComponent = entity.get ('position');

     this.context.lineWidth = 2;
     this.context.font="bold 25px Arial";
     this.context.fillStyle="black";
     this.context.fillText("Score : "+scoreComponent.total,positionComponent.x,positionComponent.y);

}

export {renderText};
