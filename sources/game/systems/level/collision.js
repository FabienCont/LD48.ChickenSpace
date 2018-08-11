import {collide} from "modules/collide.js";
import {collideDistance} from "modules/collideDistance";
function collision(entity) {

    var positionComponent = entity.get('position');
    var hitboxComponent =entity.get('hitbox');

    this.world.entities.forEach(function(otherEntity){

      if(entity!==otherEntity){
        if(otherEntity.has(['hitbox'])){
          if(collide(hitboxComponent.rectangle,otherEntity.components.hitbox.rectangle)){
            var distance = collideDistance(hitboxComponent.rectangle,otherEntity.components.hitbox.rectangle);
            positionComponent.x+= distance.x;
            positionComponent.y+= distance.y;
            hitboxComponent.rectangle.x=positionComponent.x;
            hitboxComponent.rectangle.y=positionComponent.y;

            if(entity.has(['jump']) && distance.y<0 ){
              entity.remove(['jump']);
            }
          }
        }
      }

    });

}

export {collision};
