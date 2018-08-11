import {Rectangle} from "modules/shape.js";

var Hitbox=function(x,y,width,height,pushable,destructible){


  this.rectangle=new Rectangle(x,y,width,height);
  this.pushable= pushable;
  this.name = 'hitbox';
  this.destructible = destructible?destructible:false;

}

export {Hitbox};
