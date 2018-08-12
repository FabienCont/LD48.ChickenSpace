function renderTextHint(entity) {

     const hintComponent = entity.get('hint');
     const positionComponent = entity.get ('position');

     this.context.lineWidth = 2;
     this.context.font="bold 18px Arial";
     this.context.fillStyle="black";
     this.context.fillText(hintComponent.text,positionComponent.x,positionComponent.y);

}

export {renderTextHint};
