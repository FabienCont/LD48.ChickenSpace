function Animation(image, frames, offset,scale) {

    if(!offset){
      this.offset = 0;
    }else {
      this.offset = offset;
    }

    if(!scale){
      this.scale = 1;
    }else {
      this.scale = scale;
    }
    this.name = 'animation';

    this.image = image;
    this.framerate = 24;
    this.frames = frames;

    this.frame = 0;
    this.current = this.frames[this.frame];
    this.elapsed = 0;
}

export {Animation};
