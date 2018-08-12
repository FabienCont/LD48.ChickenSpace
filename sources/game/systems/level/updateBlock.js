import {Entity} from 'modules/world.js';
import {random} from 'modules/random.js';

import {Animation} from 'components/animation.js';
import {Position} from 'components/position.js';
import {Velocity} from 'components/velocity.js';
import {Hitbox} from 'components/hitbox.js';
import {Real} from 'components/real.js';
import {Block} from 'components/block.js';

function updateBlock(entity) {

    const positionComponent = entity.get('position');

    if(positionComponent.y > this.world.limitY+this.size.height ){
      this.world.remove(entity);

      var oversize =Math.ceil((this.world.boxCount-19)/10);
      var boxSize = 40 + 2 *(oversize);
      var scale = boxSize/300;
      var distanceY = this.world.limitY+ (-2*this.size.height) ;
      this.world.add(new Entity('box', [
          new Position(random(450),distanceY),
          new Animation(this.assets.images['box'], [{'x': 0, 'y': 0, 'width': 300, 'height': 300}],0,scale),
          new Hitbox(20000, 20000,boxSize,boxSize,false),
          new Velocity(0,0,-1.2,1.2),
          new Real(),
          new Block()
      ]));


    }
}

export {updateBlock};
