function renderButton(entity) {

     const buttonComponent = entity.get('button');
     const positionComponent = entity.get ('position');

     this.context.lineWidth = 2;
     this.context.font="bold 25px Arial";
     this.context.fillStyle="black";
     this.context.fillText(buttonComponent.text,positionComponent.x,positionComponent.y);

}

export {renderButton};
