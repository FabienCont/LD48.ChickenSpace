function renderButton(entity) {

     const buttonComponent = entity.get('button');
     const positionComponent = entity.get ('position');

     this.context.lineWidth = 2;
     this.context.font="20px Arial";
     this.context.strokeStyle = 'black';
     this.context.strokeText(buttonComponent.text,positionComponent.x,positionComponent.y);

}

export {renderButton};
