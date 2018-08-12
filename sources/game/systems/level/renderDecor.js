function renderDecor(entity) {

    const animationComponent = entity.get('animation');
    const positionComponent = entity.get('position');

    this.context.drawImage(

        animationComponent.image,
        animationComponent.current.x, animationComponent.current.y, animationComponent.current.width, animationComponent.current.height,
        positionComponent.x -this.camera.x , positionComponent.y-this.camera.y, (2*animationComponent.current.width)/3, (2*animationComponent.current.height)/3

    );

}

export {renderDecor};
