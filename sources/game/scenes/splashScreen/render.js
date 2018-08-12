function render() {

    // console.log('render splashScreen scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#e0f0e8';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.render.update.call(this, this.world.entities);
    this.systems.renderButton.update.call(this,this.world.entities);

}

export {render};