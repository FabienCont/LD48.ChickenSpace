function render(entity) {

    const animationComponent = entity.get('animation');
    const positionComponent = entity.get('position');

    this.context.drawImage(

        animationComponent.image,
        animationComponent.current.x, animationComponent.current.y, animationComponent.current.width, animationComponent.current.height,
        positionComponent.x -this.camera.x , positionComponent.y-this.camera.y - animationComponent.offset, animationComponent.current.width*  animationComponent.scale , animationComponent.current.height* animationComponent.scale

    );
}

export {render};
