function render() {

    //console.log('render level scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#99b6e9';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.renderDecor.update.call(this, this.world.entities);
    this.systems.render.update.call(this, this.world.entities);
    this.systems.renderText.update.call(this,this.world.entities);

}

export {render};
