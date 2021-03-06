import {random} from 'modules/random.js';
import {shuffle} from 'modules/shuffle.js';

function update(delta) {

    // console.log('update splashScreen scene');
    this.delta = delta;

    this.systems.input.update.call(this, this.world.entities);

    this.inputs.length = 0;
}

export {update};
