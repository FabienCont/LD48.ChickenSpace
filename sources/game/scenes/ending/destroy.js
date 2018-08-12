function destroy() {

      console.log('destroy ending scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);
    this.keyboard.destroy();

    delete this.delta;
    delete this.inputs;
    delete this.world;
    delete this.score;
    delete this.camera;

    delete this.keyboard;
    delete this.systems;

    console.log('-------');
}

export {destroy};
