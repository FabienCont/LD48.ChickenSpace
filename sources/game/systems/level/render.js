function render(entity) {

    const animationComponent = entity.get('animation');
    const positionComponent = entity.get('position');

    if(entity.name=="hero"){

      if(positionComponent.y<this.size.height/2 || this.world.limitY< -this.size.height/2){

        this.camera.y = positionComponent.y - (this.size.height/2);

        if(positionComponent.y< this.world.limitY ){
          this.world.limitY=positionComponent.y;
        }

        if(this.camera.y >this.world.limitY){
          this.camera.y=this.world.limitY;
        }
      }else{
        this.camera.y=0;
      }
    }

    this.context.drawImage(

        animationComponent.image,
        animationComponent.current.x, animationComponent.current.y, animationComponent.current.width, animationComponent.current.height,
        positionComponent.x -this.camera.x , positionComponent.y-this.camera.y - animationComponent.offset, animationComponent.current.width*  animationComponent.scale , animationComponent.current.height* animationComponent.scale

    );

}

export {render};
