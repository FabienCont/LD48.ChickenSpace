import {collide} from "modules/collide.js";
import {collideDistance} from "modules/collideDistance";
function collision(entity) {

  var BreakException = {};

  try {

    var positionComponent = entity.get('position');
    var hitboxComponent =entity.get('hitbox');

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
            }

            if(!hitboxComponent.destructible && distance.y<0){
              throw BreakException;
            }else if(hitboxComponent.destructible && distance.y>0){
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
