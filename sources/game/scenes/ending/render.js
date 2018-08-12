function render() {

    //console.log('render ending scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#99b6e9';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.renderDecor.update.call(this,this.world.entities);
    this.systems.renderGame.update.call(this,this.world.entities);
    this.systems.render.update.call(this, this.world.entities);
    this.systems.renderText.update.call(this,this.world.entities);
    this.systems.renderButton.update.call(this,this.world.entities);


}

export {render};
