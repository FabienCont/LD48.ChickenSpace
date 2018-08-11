import {Rectangle} from "modules/shape.js";

var Hitbox=function(x,y,width,height){


  this.rectangle=new Rectangle(x,y,width,height);
  this.name = 'hitbox';
}

export {Hitbox};
