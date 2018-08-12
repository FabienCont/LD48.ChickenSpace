import {collide} from "modules/collide.js";
import {collideDistance} from "modules/collideDistance.js";
import {TouchGround} from "components/touchGround.js";

function collision(entity) {

  var BreakException = {};

  try {

    var positionComponent = entity.get('position');
    var hitboxComponent =entity.get('hitbox');

    if(entity.name=="hero" &&  positionComponent.y> (this.world.limitY+this.size.height )){
          entity.remove(['hitbox']);
          this.load('ending');
    }

    this.world.entities.forEach((otherEntity)=>{

      if(entity!==otherEntity){
        if(otherEntity.has(['hitbox'])){
          if(collide(hitboxComponent.rectangle,otherEntity.components.hitbox.rectangle)){
            var distance = collideDistance(hitboxComponent.rectangle,otherEntity.components.hitbox.rectangle);

            positionComponent.y+= distance.y;
            hitboxComponent.rectangle.y=positionComponent.y;

            if(hitboxComponent.pushable){
              positionComponent.x+= distance.x;
              hitboxComponent.rectangle.x=positionComponent.x;
            }


            if(entity.has(['jump']) && distance.y<0 ){
              entity.remove(['jump']);
            }else if(otherEntity.has(['touchGround']) && distance.y<0 && entity.name!='hero'){
              entity.add([new TouchGround()]);
              entity.remove(['velocity']);
            }

            if(!hitboxComponent.destructible && distance.y<0){
              throw BreakException;
            }else if(hitboxComponent.destructible && distance.y>0){
              entity.remove(['hitbox']);
              this.load('ending');
            }
          }
        }
      }

    });

    } catch (e) {
      if (e !== BreakException) throw e;
    }

}

export {collision};
