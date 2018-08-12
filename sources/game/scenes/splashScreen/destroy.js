function destroy() {

    console.log('destroy splashScreen scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);
    this.keyboard.destroy();

    delete this.delta;
    delete this.inputs;
    delete this.world;
    delete this.camera;

    delete this.keyboard;
    delete this.systems;

    console.log('-------');
}

export {destroy};
