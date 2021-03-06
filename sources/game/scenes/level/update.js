import {random} from 'modules/random.js';
import {shuffle} from 'modules/shuffle.js';

function update(delta) {

    //console.log('update level scene');
    this.delta = delta;

    this.systems.input.update.call(this, this.world.entities);
    this.systems.animate.update.call(this, this.world.entities);
    this.systems.movement.update.call(this,this.world.entities);
    this.systems.gravity.update.call(this,this.world.entities);
    this.systems.hitboxUpdate.update.call(this,this.world.entities);
    this.systems.collision.update.call(this,this.world.entities);
    this.systems.updateBlock.update.call(this,this.world.entities);
    this.systems.renderText.update.call(this,this.world.entities);


    this.inputs.length = 0;
}

export {update};
